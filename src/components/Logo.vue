<script setup lang="ts">
import { cn } from "@/lib/utils";
import { SquareDashedMousePointer } from "lucide-vue-next";
import { defineProps } from "vue";

interface LogoProps {
  fontSize?: string;
  iconSize?: number;
}

const { fontSize = "text-2xl", iconSize = 20 } = defineProps<LogoProps>();
</script>
<template>
  <RouterLink
    to="/"
    :class="cn('text-2xl font-extrabold flex items-center gap-2', fontSize)"
  >
    <div
      class="p-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600"
    >
      <SquareDashedMousePointer :size="iconSize" class="stroke-white" />
    </div>
    <div>
      <span
        class="text-transparent bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text"
      >
        Flow
      </span>
      <span class="text-stone-700 dark:text-stone-300">Scrape</span>
    </div>
  </RouterLink>
</template>
