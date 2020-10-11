/*
* @Author: xry
* @Description:
* @Date: 2020-08-30 12:58:52
 * @LastEditTime: 2020-08-30 13:23:27
 * @FilePath: /Hui/rui/src/shims-global.d.ts
*/
interface MenuList {
 menuId: number;
 parentId: number;
 name: string;
 url: string;
 list: MenuList[];
}
