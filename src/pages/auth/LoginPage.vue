<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabaseClient";
import { toTypedSchema } from "@vee-validate/zod";
import { Loader2 } from "lucide-vue-next";
import { useForm } from "vee-validate";
import { ref } from "vue";
import { useRouter } from "vue-router";
import * as z from "zod";

const router = useRouter();

const isLoading = ref(false);
const formSchema = toTypedSchema(
  z.object({
    email: z.string().email(),
    password: z.string().min(4),
  })
);

const form = useForm({
  validationSchema: formSchema,
});

const onSignIn = form.handleSubmit(async (values) => {
  isLoading.value = true;
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });
    if (error) {
      throw new Error(error.message);
    }

    router.replace("/");
  } catch (error) {
    // showError({ description: (error as Error).message });
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="grid h-screen place-items-center">
    <Card class="min-w-96">
      <CardHeader>
        <h2 class="text-lg font-semibold">Sign-in to ScrapeFlow</h2>
      </CardHeader>

      <CardContent>
        <form
          @submit="onSignIn"
          :validation-schema="formSchema"
          class="flex flex-col gap-3"
        >
          <FormField v-slot="{ componentField }" name="email">
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="example@gmail.com"
                  v-bind="componentField"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="password">
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="enter password"
                  v-bind="componentField"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <Button :disabled="isLoading">
            <Loader2 v-if="isLoading" class="w-4 h-4 mr-2 animate-spin" />
            Sign in
          </Button>
        </form>
      </CardContent>
    </Card>
  </div>
</template>
