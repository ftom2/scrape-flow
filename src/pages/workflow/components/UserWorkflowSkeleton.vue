<template>
  <div class="space-y-2">
    <Skeleton v-for="n in 4" :key="n" class="w-full h-32" />
  </div>
</template>

<script setup lang="ts">
import Skeleton from "@/components/ui/skeleton/Skeleton.vue";
</script>
