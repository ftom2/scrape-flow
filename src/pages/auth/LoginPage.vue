<script setup lang="ts">
import Logo from "@/components/Logo.vue";
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
  <div class="relative grid h-screen place-items-center">
    <div class="flex flex-col items-center gap-4">
      <Logo />
      <div
        class="absolute z-10 rounded-full bg-green-500/50 left-48 top-90 size-32"
      />
      <div
        class="absolute z-10 rounded-full bg-red-500/50 right-56 top-96 size-20"
      />
      <div
        class="absolute z-10 rounded-full bg-cyan-500/50 left-96 bottom-60 size-20"
      />
      <Card class="relative z-20 min-w-96 glass">
        <CardHeader>
          <h2 class="text-lg font-semibold text-center">Sign in</h2>
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
            <Button :disabled="isLoading" class="mt-4">
              <Loader2 v-if="isLoading" class="w-4 h-4 mr-2 animate-spin" />
              Sign in
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
<style scoped>
.glass {
  background: rgba(0, 0, 0, 0.55);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.57);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.38);
}

.dark .glass {
  background: rgba(0, 0, 0, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
