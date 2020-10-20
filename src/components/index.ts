/*
 * @Author: xry
 * @Description:
 * @Date: 2020-10-20 15:37:22
 * @LastEditTime: 2020-10-20 15:40:04
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/src/components/index.ts
 */
import Examplebox from "./Examplebox/index.vue";

const grobalComponont = {
  install(Vue: any) {
    Vue.component(Examplebox.name, Examplebox);
  }
};

export default grobalComponont;