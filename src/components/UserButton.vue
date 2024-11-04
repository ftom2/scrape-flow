<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore();
const email = userStore.user?.email;
</script>
<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <div
        class="grid text-xs text-white rounded-full size-8 place-items-center bg-cyan-600"
      >
        TF
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>
        <div class="mb-1 text-xs text-muted-foreground">My Account</div>
        <div class="text-xs font-semibold">{{ email }}</div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem as-child>
        <div @click="$emit('logout')" class="cursor-pointer">Log Out</div>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
