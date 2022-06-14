import { createRouter, createWebHistory } from "vue-router";

import AuthorPage from "@/pages/AuthorPage.vue";
import MainPage from "../pages/MainPage.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: MainPage,
    },
    {
      path: "/login",
      component: AuthorPage,
    },
  ],
});

export default router;
