<script setup lang="ts">
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-vue-next";
import { Primitive, type PrimitiveProps } from "radix-vue";
import type { HTMLAttributes } from "vue";
import { type ButtonVariants, buttonVariants } from ".";

interface Props extends PrimitiveProps {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
  isLoading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
  isLoading: false,
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
    :disabled="isLoading"
  >
    <Loader2 v-if="isLoading" class="w-4 h-4 mr-2 animate-spin" />
    <slot />
  </Primitive>
</template>
