import { supabase } from "@/lib/supabaseClient";
import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "@/pages/auth/LoginPage.vue";
import HomePage from "@/pages/dashboard/DashboardPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/login", component: LoginPage },
  { path: "/:catchAll(.*)*", component: NotFoundPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  const session = await supabase.auth.getSession();

  if (to.path !== "/login" && !session.data.session) {
    return "/login";
  }
  if (to.path === "/login" && session.data.session) {
    return "/";
  }
});
