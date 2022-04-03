import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Card from "../views/Card.vue";
import Card2 from "../views/Card2.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/card1",
    name: "Card",
    component: Card,
  },
  {
    path: "/card2",
    name: "Card2",
    component: Card2,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
