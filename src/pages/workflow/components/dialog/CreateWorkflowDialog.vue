<script setup lang="ts">
import InputField from "@/components/InputField.vue";
import Button from "@/components/ui/button/Button.vue";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FormField } from "@/components/ui/form";
import { useForm } from "vee-validate";
import { ref } from "vue";
import { createWorkflowSchema } from "../../schema";
import CustomDialogHeader from "./CustomDialogHeader.vue";

const { triggerText } = defineProps<{
  triggerText?: string;
}>();
const isOpen = ref(false);

const { handleSubmit } = useForm({
  validationSchema: createWorkflowSchema,
  initialValues: {
    name: "",
    description: "",
  },
});

const onSubmit = handleSubmit(async (values) => {
  console.log(values);
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

      <form
        class="w-full p-6 space-y-8"
        @submit="onSubmit"
        :validation-schema="createWorkflowSchema"
      >
        <FormField v-slot="{ componentField }" name="name">
          <InputField
            label="Name"
            placeholder="Workflow name"
            :field-props="componentField"
            required
          />
        </FormField>
        <FormField v-slot="{ componentField }" name="description">
          <InputField
            label="Description"
            placeholder="Workflow description"
            :field-props="componentField"
          />
        </FormField>
        <Button type="submit">Create</Button>
      </form>
    </DialogContent>
  </Dialog>
</template>
