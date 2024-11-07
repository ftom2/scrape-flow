<script setup lang="ts">
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TooltipWrapperProps {
  side?: "left" | "right" | "top" | "bottom";
  content: string;
}

const { side = "top", content } = defineProps<TooltipWrapperProps>();
</script>
<template>
  <TooltipProvider :delay-duration="0">
    <Tooltip>
      <TooltipTrigger as-child>
        <slot />
      </TooltipTrigger>
      <TooltipContent :side="side">
        {{ content }}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
