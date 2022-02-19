/* eslint-disable no-dupe-keys */
import { createRouter, createWebHistory } from "vue-router";
import RouteView from "@/views/RouteView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: RouteView,
      children: [
        // Home Page
        {
          path: "",
          name: "TheHome",
          component: () => import("../views/TheHome.vue"),
        },

        // Shop Page
        {
          path: "shop",
          name: "TheShops",
          component: () => import("../views/TheShops.vue"),
        },

        // Products Page
        {
          path: "products",
          name: "TheProducts",
          component: () => import("../views/TheProducts.vue"),
        },

        // Food Page
        {
          path: "food",
          name: "TheFoods",
          component: () => import("../views/TheFoods.vue"),
        },

        // Cart Page
        {
          path: "cart",
          name: "TheCart",
          component: () => import("../views/TheCart.vue"),
        },

        // Food Page
        {
          path: "wishlist",
          name: "TheWishlist",
          component: () => import("../views/TheWishlist.vue"),
        },

        // The Checkout
        {
          path: "checkout",
          name: "TheCheckout",
          component: () => import("../views/TheCheckout.vue"),
        },
      ],
    },
  ],
});

export default router;
