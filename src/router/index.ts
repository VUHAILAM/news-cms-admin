import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/posts",
    name: "Posts",
    component: () =>
      import(/* webpackChunkName: "posts" */ "../views/Posts.vue"),
  },
  {
    path: "/crawler",
    name: "Crawler",
    component: () =>
      import(/* webpackChunkName: "crawler" */ "../views/Crawler.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
