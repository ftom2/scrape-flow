<script setup lang="ts">
import { ComponentFieldBindingObject } from "vee-validate";
import { FormControl, FormItem, FormLabel, FormMessage } from "./ui/form";
import Input from "./ui/input/Input.vue";

const props = defineProps<{
  fieldProps: ComponentFieldBindingObject<any>;
  type?: string;
  placeholder?: string;
  label: string;
}>();
</script>
<template>
  <FormItem>
    <FormLabel>{{ props.label }}</FormLabel>
    <FormControl>
      <Input
        :type="props.type"
        :placeholder="props.placeholder"
        v-bind="props.fieldProps"
      />
    </FormControl>
    <FormMessage />
  </FormItem>
</template>
