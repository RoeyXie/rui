/*
 * @Author: xry
 * @Description:
 * @Date: 2020-08-29 22:25:49
 * @LastEditTime: 2020-10-21 19:38:38
 * @FilePath: /Hui/rui/src/main.ts
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/permission"; // permission control 权限控制
import "@/assets/css/index.scss";
import VueCompositionAPI from "@vue/composition-api";
// 引入hui
import HUI from "./package";
Vue.use(HUI);
// 引入全局组件
import grobalComponont from "./components/index";
Vue.use(grobalComponont);

import axios from "axios";
axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "/local" : "";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.use(VueCompositionAPI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
