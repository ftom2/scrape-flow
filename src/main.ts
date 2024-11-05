import { VueQueryPlugin } from "@tanstack/vue-query";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import { router } from "./routes";

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(VueQueryPlugin);
app.mount("#app");
