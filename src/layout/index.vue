<!--
 * @Author: xry
 * @Description:
 * @Date: 2020-08-29 23:38:45
 * @LastEditTime: 2020-09-27 11:11:56
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/src/layout/index.vue
-->

<script>
import { defineComponent, reactive, toRefs } from "@vue/composition-api";
import HMenu from "./HMenu";

export default defineComponent({
  name: "Layout",
  components: { HMenu },
  setup() {
    const state = reactive({
      a: "Roey"
    });
    return {
      ...toRefs(state)
    };
  },
  render() {
    const { a } = this;
    return (
      <div class="appmain">
        <header class="header">
          <div class="header-logo">{a}</div>
        </header>
        <div class="content">
          <nav class="nav">
            <r-hide-scroll maxHeight="100%">
              <h-menu></h-menu>
            </r-hide-scroll>
          </nav>
          <main class="main">
            <r-content>
              <router-view></router-view>
            </r-content>
          </main>
        </div>
      </div>
    );
  }
});
</script>
<style lang="scss">
/* @import url() */

.appmain {
  height: 100vh;
}
.header {
  width: 100%;
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  z-index: 1;
  padding: 0 30px;
  text-align: start;
  .header-logo {
    font-family: fantasy;
    font-size: 30px;
    height: 60px;
    line-height: 60px;
  }
}

.content {
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
  .nav {
    width: 200px;
    overflow-y: auto;
    text-align: start;
    height: 100%;
  }
  .main {
    flex: 1;
    overflow-y: auto;
    text-align: start;
    // padding: 20px 50px;
    height: 100%;
  }
}
</style>
