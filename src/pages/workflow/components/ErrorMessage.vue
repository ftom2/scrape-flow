<script setup lang="ts">
interface Props {
  message?: string;
}

const { message } = defineProps<Props>();
</script>

<template>
  <Alert variant="destructive">
    <AlertCircle class="size-4" />
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>
      {{ message || "Something went wrong. Please try again later" }}
    </AlertDescription>
  </Alert>
</template>
