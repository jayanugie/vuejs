import { createRouter, createWebHistory } from "vue-router";
import RefsReactive from "../views/RefsReactive.vue";
import ComputedValue from "../views/ComputedValue.vue";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue";

const routes = [
  {
    path: "/refs-reactive",
    name: "refs-reactive",
    component: RefsReactive,
  },
  {
    path: "/computed",
    name: "computed",
    component: ComputedValue,
  },
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/posts/:id",
    name: "details",
    component: Details,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
