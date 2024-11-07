<script setup lang="ts">
import InputField from "@/components/InputField.vue";
import Button from "@/components/ui/button/Button.vue";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FormField } from "@/components/ui/form";
import { useForm } from "vee-validate";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useWorkflowsApi } from "../../hooks/useWorkflows.api";
import { createWorkflowSchema } from "../../schema";
import CustomDialogHeader from "./CustomDialogHeader.vue";

const { triggerText } = defineProps<{
  triggerText?: string;
}>();

const router = useRouter();
const { isLoading, createWorkflow } = useWorkflowsApi();

const isOpen = ref(false);

const { handleSubmit, resetForm } = useForm({
  validationSchema: createWorkflowSchema,
  initialValues: {
    name: "",
    description: "",
  },
});

const onSubmit = handleSubmit(async (values) => {
  const [response] = await createWorkflow(values);
  router.push(`/workflows/${response.id}`);
  isOpen.value = false;
});

function onUpdate(value: boolean) {
  if (!value) {
    resetForm();
  }
  isOpen.value = value;
}
</script>
<template>
  <Dialog :open="isOpen" @update:open="onUpdate">
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
            help="Provide a unique name for your workflow"
            :field-props="componentField"
            required
          />
        </FormField>
        <FormField v-slot="{ componentField }" name="description">
          <InputField
            label="Description"
            placeholder="Workflow description"
            is-textarea
            :field-props="componentField"
          />
        </FormField>
        <Button type="submit" class="w-full" :is-loading="isLoading">{{
          !isLoading && "Proceed"
        }}</Button>
      </form>
    </DialogContent>
  </Dialog>
</template>
