import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("users", () => {
  const user = ref();

  return { user };
});
