<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import BreadcrumbHeader from "./components/BreadcrumbHeader.vue";
import DesktopSidebar from "./components/DesktopSidebar.vue";
import MobileSidebar from "./components/MobileSidebar.vue";
import ThemeToggle from "./components/ThemeToggle.vue";
import Separator from "./components/ui/separator/Separator.vue";
import Toaster from "./components/ui/toast/Toaster.vue";

const route = useRoute();
const isLoginPage = computed(() => route.path === "/login");
</script>

<template>
  <div v-if="isLoginPage">
    <RouterView />
  </div>
  <div class="flex h-screen" v-else>
    <DesktopSidebar />
    <div class="flex flex-col flex-1 min-h-screen">
      <header
        class="flex items-center justify-between px-6 py-4 h-[50px] container"
      >
        <MobileSidebar />
        <BreadcrumbHeader />
        <ThemeToggle />
      </header>
      <Separator />
      <div class="overflow-auto">
        <div class="container py-4 text-accent-foreground">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
  <Toaster />
</template>
