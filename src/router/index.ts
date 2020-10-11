/*
 * @Author: xry
 * @Description:
 * @Date: 2020-08-29 22:25:49
 * @LastEditTime: 2020-08-30 14:38:11
 * @FilePath: /Hui/rui/src/router/index.ts
 */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Layout from "../layout/index.vue";

Vue.use(VueRouter)

export const constantRoutes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: '/layoutview',
    component: Layout
  }
];

const router = new VueRouter({
  routes: constantRoutes
});

export default router;
