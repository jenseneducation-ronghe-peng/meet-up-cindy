import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Description from "../views/Description.vue";
import WillGo from "../views/WillGo.vue";
import HasBeen from "../views/HasBeen.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/description/:id",
    name: "Description",
    component: Description
  },
  {
    path: "/going",
    name: "Me",
    component: WillGo
  },
  {
    path: "/hasbeen",
    name: "HasBeen",
    component: HasBeen
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
