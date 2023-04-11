import { createRouter, createWebHistory } from "vue-router";
import BlogHome from "../views/BlogHome.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: BlogHome,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
