<script setup lang="ts">
import { InboxIcon } from "lucide-vue-next";
import CreateWorkflowDialog from "./dialog/CreateWorkflowDialog.vue";
</script>
<template>
  <div class="flex flex-col items-center h-full gap-4">
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
</template>
