<script setup lang="ts">
import BreadcrumbHeader from "./components/BreadcrumbHeader.vue";
import DesktopSidebar from "./components/DesktopSidebar.vue";
import ThemeToggle from "./components/ThemeToggle.vue";
import Separator from "./components/ui/separator/Separator.vue";
</script>

<template>
  <div class="flex h-screen">
    <DesktopSidebar />
    <div class="flex flex-col flex-1 min-h-screen">
      <header
        class="flex items-center justify-between px-6 py-4 h-[50px] container"
      >
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
</template>
