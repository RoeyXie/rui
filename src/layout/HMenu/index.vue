<!--
 * @Author: xry
 * @Description:
 * @Date: 2020-08-29 23:39:25
 * @LastEditTime: 2020-08-30 16:00:10
 * @FilePath: /Hui/rui/src/layout/HMenu/index.vue
-->
<script>
import {
  defineComponent,
  reactive,
  toRefs
} from "@vue/composition-api";
import SubMenu from "./SubMenu";
import { menuList } from "@/assets/data.ts";
export default defineComponent({
  name: "HMenu",
  components: { SubMenu },
  setup() {
    const state = reactive({
      typeRoutes: {}
    });
    menuList.forEach(item => {
      state.typeRoutes[item.name] = item.list;
    });
    return {
      ...toRefs(state)
    };
  },
  render() {
    const { typeRoutes } = this;
    const subMenu = Object.entries(typeRoutes).map(([title, menus]) => (
      <SubMenu key={title} title={title} menus={menus}></SubMenu>
    ));
    return <div class="menu">{subMenu}</div>;
  }
});
</script>
<style lang="scss">
/* @import url() */
</style>
