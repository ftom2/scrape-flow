<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useForm } from "vee-validate";
import { ref } from "vue";
import { createWorkflowSchema } from "../../schema";
import CustomDialogHeader from "./CustomDialogHeader.vue";

const { triggerText } = defineProps<{
  triggerText?: string;
}>();
const isOpen = ref(false);

const form = useForm({
  validationSchema: createWorkflowSchema,
  initialValues: {
    name: "",
    description: "",
  },
});
</script>
<template>
  <Dialog v-model:open="isOpen">
    <DialogTrigger as-child>
      <Button>{{ triggerText ?? "Create workflow" }}</Button>
    </DialogTrigger>
    <DialogContent class="px-0">
      <CustomDialogHeader
        icon="lucide:layers-2"
        title="Create Workflow"
        subtitle="Start building your workflow"
      />
      <form class="w-full p-6 space-y-8"></form>
    </DialogContent>
  </Dialog>
</template>
