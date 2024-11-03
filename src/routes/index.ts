import { createMemoryHistory, createRouter } from "vue-router";

import HomePage from "@/pages/dashboard/DashboardPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/:catchAll(.*)*", component: NotFoundPage },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
