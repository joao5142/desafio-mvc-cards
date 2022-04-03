import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/card1",
    name: "Card",
    component: import("../views/Card.vue"),
  },
  {
    path: "/card2",
    name: "Card2",
    component: import("../views/Card2.vue"),
  },
];

const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
