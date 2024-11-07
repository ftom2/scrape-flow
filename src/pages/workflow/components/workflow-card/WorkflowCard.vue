<script setup lang="ts">
import Badge from "@/components/ui/badge/Badge.vue";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tables } from "@/types/database.types";
import { FileTextIcon, PlayIcon, ShuffleIcon } from "lucide-vue-next";
import { computed } from "vue";
import { STATUS_COLORS } from "../../constants";
import { WorkflowStatus } from "../../types";
import WorkflowActions from "./WorkflowActions.vue";

const { workflow } = defineProps<{
  workflow: Tables<"Workflow">;
}>();

const isDraft = computed(() => workflow.status === WorkflowStatus.DRAFT);
</script>
<template>
  <Card
    class="overflow-hidden border rounded-lg shadow-sm hover:shadow-md dark:shadow-primary/30"
  >
    <CardContent class="p-4 flex items-center justify-between h-[100px]">
      <div class="flex items-center justify-end gap-3">
        <div
          class="flex items-center justify-center rounded-full size-10"
          :class="STATUS_COLORS[workflow.status]"
        >
          <FileTextIcon v-if="isDraft" class="size-5" />
          <PlayIcon v-else class="text-white size-5" />
        </div>
        <div>
          <h3
            class="flex items-center gap-2 text-base font-bold text-muted-foreground"
          >
            <RouterLink
              :to="`/workflow/editor/${workflow.id}`"
              class="flex items-center hover:underline"
              >{{ workflow.name }}</RouterLink
            >
            <Badge v-if="isDraft" class="text-yellow-800 bg-yellow-100"
              >Draft</Badge
            >
          </h3>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <RouterLink
          :to="`/workflow/editor/${workflow.id}`"
          class="flex items-center gap-2"
          :class="[buttonVariants({ variant: 'outline', size: 'sm' })]"
        >
          <ShuffleIcon class="size-4" />
          Edit
        </RouterLink>
        <WorkflowActions :key="workflow.id" />
      </div>
    </CardContent>
  </Card>
</template>
