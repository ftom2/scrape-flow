import { supabase } from "@/lib/supabaseClient";
import { createRouter, createWebHistory } from "vue-router";

import DashboardPage from "@/pages/dashboard/DashboardPage.vue";

const routes = [
  { path: "/dashboard", component: DashboardPage },
  { path: "/login", component: () => import("@/pages/auth/LoginPage.vue") },
  {
    path: "/workflows",
    component: () => import("@/pages/workflow/WorkflowsPage.vue"),
  },
  { path: "/", component: DashboardPage },
  {
    path: "/:catchAll(.*)*",
    component: () => import("@/pages/NotFoundPage.vue"),
  },
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
