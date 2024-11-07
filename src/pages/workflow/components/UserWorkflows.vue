<script setup lang="ts">
import { Tables } from "@/types/database.types";
import WorkflowCard from "./workflow-card/WorkflowCard.vue";

defineProps<{
  workflows: Tables<"Workflow">[];
}>();
</script>
<template>
  <div class="grid grid-cols-1 gap-4">
    <WorkflowCard
      v-for="workflow in workflows"
      :key="workflow.id"
      :workflow="workflow"
    />
  </div>
</template>
