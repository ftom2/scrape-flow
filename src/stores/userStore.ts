import { AuthUser } from "@supabase/supabase-js";
import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

export const useUserStore = defineStore("users", () => {
  const user = ref<AuthUser>();

  const router = useRouter();
  watch(
    () => user,
    (newUser) => {
      if (!newUser.value) {
        router.replace("/login");
      }
    }
  );

  return { user };
});
