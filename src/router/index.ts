import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/home/home.view.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/contact/contact.view.vue"),
    },
    {
      path: "/help",
      name: "help",
      component: () => import("../views/help/help.view.vue"),
    },
    {
      path: "/shop",
      name: "shop",
      component: () => import("../views/shop/shop.view.vue"),
    },
  ],
});

export default router;
