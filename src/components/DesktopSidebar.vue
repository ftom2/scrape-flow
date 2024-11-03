<script setup lang="ts">
import { routes } from "@/lib/routeConstants";
import { Icon } from "@iconify/vue";
import Logo from "./Logo.vue";
import { buttonVariants } from "./ui/button";
</script>
<template>
  <aside
    class="relative hidden md:block min-w-[280px] max-w-[280px] h-screen overflow-hidden w-full bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground border-r-2 border-separate"
  >
    <div
      class="flex items-center justify-center gap-2 p-4 border-b border-separate"
    >
      <Logo />
    </div>
    <div class="p-2">TODO CREDITS</div>
    <div class="flex flex-col gap-1 p-2">
      <RouterLink
        v-for="route in routes"
        :key="route.label"
        :to="route.href"
        :class="buttonVariants({ variant: 'sidebarItem' })"
        exact-active-class="bg-primary text-primary-foreground hover:bg-primary/90"
      >
        <Icon :icon="route.icon" class="size-5" />
        <span>
          {{ route.label }}
        </span>
      </RouterLink>
    </div>
  </aside>
</template>
