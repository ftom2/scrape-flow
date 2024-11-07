<script setup lang="ts">
import { useRouter } from "vue-router";
import {
  CreateWorkflowDialog,
  UserWorkflowSkeleton,
  UserWorkflows,
} from "./components";
import EmptyState from "./components/EmptyState.vue";
import ErrorMessage from "./components/ErrorMessage.vue";
import { useWorkflowsApi } from "./hooks/useWorkflows.api";

const router = useRouter();
const { isLoading, workflows, error, createWorkflow } = useWorkflowsApi();
</script>
<template>
  <div class="flex flex-col h-full">
    <div class="flex justify-between">
      <div>
        <h1 class="text-3xl font-bold">Workflows</h1>
        <p class="text-muted-foreground">Manage your workflows</p>
      </div>
      <CreateWorkflowDialog />
    </div>

    <div class="h-full py-6">
      <UserWorkflowSkeleton v-if="isLoading" />
      <div v-else>
        <ErrorMessage v-if="!workflows" :message="error?.message" />

        <EmptyState v-else-if="!workflows.length" />

        <UserWorkflows v-else :workflows="workflows" />
      </div>
    </div>
  </div>
</template>
