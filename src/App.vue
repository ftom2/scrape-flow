<script setup lang="ts">
import {
  BreadcrumbHeader,
  DesktopSidebar,
  MobileSidebar,
  ThemeToggle,
  UserButton,
} from "@/components";
import Separator from "@/components/ui/separator/Separator.vue";
import { supabase } from "@/lib/supabaseClient";
import { useColorMode } from "@vueuse/core";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { Toaster } from "vue-sonner";
import { useUserStore } from "./stores/userStore";

type Theme = "light" | "dark";
const mode = useColorMode();
const userStore = useUserStore();

const route = useRoute();
const isLoginPage = computed(() => route.path === "/login");

supabase.auth.onAuthStateChange((event, session) => {
  if (event === "SIGNED_IN") {
    userStore.user = session?.user;
  } else if (event === "SIGNED_OUT") {
    userStore.user = undefined;
  }
});

function onLogout() {
  supabase.auth.signOut();
}
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
        <div class="flex items-center gap-1">
          <ThemeToggle />
          <UserButton @logout="onLogout" />
        </div>
      </header>
      <Separator />
      <div class="overflow-auto">
        <div class="container py-4 text-accent-foreground">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
  <Toaster richColors :theme="mode as Theme" />
</template>
