<script setup lang="ts">
import { Alert, AlertDescription } from "@/components/ui/alert";
import AlertTitle from "@/components/ui/alert/AlertTitle.vue";
import { AlertCircle, InboxIcon } from "lucide-vue-next";
import {
  CreateWorkflowDialog,
  UserWorkflowSkeleton,
  UserWorkflows,
} from "./components";
import { useWorkflowsApi } from "./hooks/useWorkflows.api";

const { isLoading, workflows, error } = useWorkflowsApi();
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
        <Alert v-if="!workflows" variant="destructive">
          <AlertCircle class="size-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {{
              error?.message || "Something went wrong. Please try again later"
            }}
          </AlertDescription>
        </Alert>

        <div
          v-else-if="!workflows.length"
          class="flex flex-col items-center h-full gap-4"
        >
          <div class="grid rounded-full bg-accent size-20 place-items-center">
            <InboxIcon class="size-10 stroke-primary" />
          </div>
          <div class="flex flex-col gap-1 text-center">
            <p class="font-bold">No workflow created yet</p>
            <p class="text-sm text-muted-foreground">
              Click the button to create a new workflow
            </p>
            <div class="mt-3">
              <CreateWorkflowDialog trigger-text="Create your first workflow" />
            </div>
          </div>
        </div>
        <UserWorkflows v-else />
      </div>
    </div>
  </div>
</template>
