<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ref } from "vue";

const { triggerText } = defineProps<{
  triggerText?: string;
}>();
const isOpen = ref(false);
</script>
<template>
  <Dialog v-model:open="isOpen">
    <DialogTrigger as-child>
      <Button>{{ triggerText ?? "Create workflow" }}</Button>
    </DialogTrigger>
    <DialogContent>
      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-bold">Create a new workflow</h2>
        <p class="text-muted-foreground">Start by creating a new workflow</p>
        <div class="flex gap-4">
          <Button variant="secondary" @click="isOpen = false">Cancel</Button>
          <Button>Create</Button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>
