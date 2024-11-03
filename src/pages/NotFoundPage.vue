<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import { ArrowLeft } from "lucide-vue-next";
</script>

<template>
  <div
    class="fixed inset-0 z-50 flex flex-col items-center justify-center h-screen font-sans bg-background"
  >
    <h1 class="m-0 text-9xl">404</h1>
    <p class="my-4 text-2xl">
      Oops! The page you're looking for doesn't exist.
    </p>
    <router-link to="/" class="text-blue-500 hover:underline">
      <Button>
        <ArrowLeft class="w-6 h-6 mr-2" />
        Back to Dashboard
      </Button>
    </router-link>
  </div>
</template>
