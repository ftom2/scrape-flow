<template>
  <DialogHeader>
    <DialogTitle as-child>
      <div class="flex flex-col items-center gap-2 mb-2">
        <Icon :icon="icon" />
        <p class="text-xl text-primary">{{ title }}</p>
        <p class="text-sm text-muted-foreground">{{ subtitle }}</p>
      </div>
    </DialogTitle>
  </DialogHeader>
</template>

<script setup lang="ts">
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Icon } from "@iconify/vue";
import { defineProps } from "vue";

interface Props {
  icon: string;
  title: string;
  subtitle: string;
}

defineProps<Props>();
</script>
