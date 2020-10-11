<!--
 * @Author: xry
 * @Description:
 * @Date: 2020-09-03 19:49:11
 * @LastEditTime: 2020-09-04 16:36:18
 * @FilePath: /Hui/rui/src/package/components/tabs/TabPane.vue

<template>
  <div v-if="isActive && hasParent" :class="tabPaneClass">
    <slot v-if="$slots.default"></slot>
  </div>
</template>  -->

<script>
import {
  defineComponent,
  reactive,
  getCurrentInstance,
  toRefs,
  computed
} from "@vue/composition-api";
export default defineComponent({
  name: "r-tab-pane",
  props: {
    label: String,
    name: {}
  },
  setup(props, { parent }) {
    const instance = getCurrentInstance();
    parent.paneList.push(instance);
    let state = reactive({
      tabs: null,
      index: null,
      tabPaneClass: computed(() => {
        return ["r_tab_pane", state.isActive ? "isActive" : ""];
      }),
      hasParent: computed(() => {
        return findParent();
      }),
      isActive: computed(() => {
        if (state.hasParent) {
          return state.tabs.value === props.name || state.tabs.currentValue === state.index;
        } else {
          return false;
        }
      })
    });
    const findParent = () => {
      let _parent = parent;
      while (_parent) {
        if (_parent.$options.customOption !== "RTabs") {
          _parent = _parent.$parent;
        } else {
          state.tabs = _parent;
          return true;
        }
      }
      return false;
    };
    return {
      ...toRefs(state)
    };
  },
  render() {
    const { $slots, tabPaneClass } = this;
    const dom =
      this.isActive && this.hasParent ? <div class={tabPaneClass}>{$slots.default}</div> : null;
    return <div>{dom}</div>;
  }
});
</script>

<style lang="scss" scoped>
.r_tabs_border-card {
  .r_tab_pane {
    padding: 0 20px 20px 20px;
  }
}
</style>
