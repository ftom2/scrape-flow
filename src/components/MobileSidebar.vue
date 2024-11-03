<script setup lang="ts">
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { routes } from "@/lib/routeConstants";
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import Logo from "./Logo.vue";
import { buttonVariants } from "./ui/button";

const isOpen = ref(false);

function toggleOpen() {
  isOpen.value = !isOpen.value;
}
</script>
<template>
  <aside class="border-separate md:hidden bg-background">
    <div class="container flex items-center justify-between px-8">
      <Sheet :open="isOpen" @update:open="toggleOpen">
        <SheetTrigger as-child>
          <Button variant="icon">
            <Icon icon="lucide:menu" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" class="w-[400px] sm:w-[540px] space-y-4">
          <Logo />

          <div class="flex flex-col gap-1">
            <RouterLink
              v-for="route in routes"
              :key="route.label"
              :to="route.href"
              :class="buttonVariants({ variant: 'sidebarItem' })"
              exact-active-class="bg-primary text-primary-foreground hover:bg-primary/90"
              @click="toggleOpen"
            >
              <Icon :icon="route.icon" class="size-5" />
              <span>
                {{ route.label }}
              </span>
            </RouterLink>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  </aside>
</template>
