import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./home/Home.vue";

Vue.extend(VueRouter);

module.exports = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
    },
  ],
});
