/*
 * @Author: xry
 * @Description:
 * @Date: 2020-08-30 01:20:34
 * @LastEditTime: 2020-09-16 10:46:44
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/src/permission.ts
 */
// import { VueConstructor } from "vue";
import { menuList } from "@/assets/data.ts";
import router, { constantRoutes } from "@/router";
import Layout from "./layout/index.vue";

interface MenuItem {
  path: string;
  // component: VueConstructor | (() => Promise<any>);
  component: any;
  name: string;
  meta: Meta;
  children: MenuList[];
 }

 interface Meta {
  title: string;
  id: number;
 }

function generaMenu(routes: any[], paramsList: MenuList[]) {
  paramsList.forEach((item: MenuList) => {
    let layOutPath = "";
    if (!item.url && item.list && item.list.length > 0) {
      layOutPath = "/" + item.list[0].url.split("/")[1];
    }
    const menu: MenuItem = {
      path: item.url ? item.url : layOutPath,
      component: item.url ? () => import(`@/views${item.url}/index.vue`) : Layout,
      children: [],
      name: item.name,
      meta: {
        title: item.name,
        id: item.menuId
      }
    };
    if (item.list && item.list.length > 0) {
      generaMenu(menu.children, item.list);
    }
    routes.push(menu);
  });
  return routes;
}

const addRoutes = [...generaMenu([], menuList), { path: "*", redirect: "/404", hidden: true }];
// console.log(addRoutes);
const accessedRoutes = [...constantRoutes, ...addRoutes];
router.addRoutes(addRoutes);
sessionStorage.removeItem("permissions");
sessionStorage.setItem("permissions", JSON.stringify(accessedRoutes));
// console.log("accessedRoutes", accessedRoutes);


