import { createRouter, createWebHistory } from "vue-router";
import RefsReactive from "../views/RefsReactive.vue";
import ComputedValue from "../views/ComputedValue.vue";

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
  // {
  //   path: "/computed",
  //   name: "computed",
  //   component: ComputedValue,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
