<script setup lang="ts">
import { ComponentFieldBindingObject } from "vee-validate";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import Input from "./ui/input/Input.vue";
import Textarea from "./ui/textarea/Textarea.vue";

const props = defineProps<{
  fieldProps: ComponentFieldBindingObject<any>;
  type?: string;
  placeholder?: string;
  label: string;
  required?: boolean;
  isTextarea?: boolean;
  help?: string;
}>();
</script>
<template>
  <FormItem>
    <FormLabel
      >{{ props.label }}
      <span v-if="props.required" class="text-destructive">*</span></FormLabel
    >
    <FormControl>
      <Textarea
        v-if="props.isTextarea"
        :placeholder="props.placeholder"
        class="resize-none"
        v-bind="props.fieldProps"
      />
      <Input
        v-else
        :type="props.type"
        :placeholder="props.placeholder"
        v-bind="props.fieldProps"
      />
      <FormDescription v-if="props.help">{{ props.help }}</FormDescription>
    </FormControl>
    <FormMessage />
  </FormItem>
</template>
