<!--
 * @Author: xry
 * @Description:
 * @Date: 2020-09-03 19:49:11
 * @LastEditTime: 2020-09-04 17:01:00
 * @FilePath: /Hui/rui/src/package/components/tabs/Tabs.vue
-->

<script>
import rTabNav from "../tabs/TabNav.vue";

import { defineComponent, reactive, toRefs, computed } from "@vue/composition-api";
export default defineComponent({
  name: "r-tabs",
  customOption: "RTabs",
  components: {
    rTabNav
  },
  props: {
    value: {
      default: 0
    },
    type: {
      type: String,
      default: "default"
    },
    tabPosition: {
      type: String,
      default: "top"
    },
    editable: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    let state = reactive({
      paneList: [],
      currentValue: props.value,
      tabsClass: computed(() => {
        return ["r_tabs", `r_tabs_${props.type}`, `r_tabs_${props.tabPosition}`];
      }),
      fatherValue: computed(() => {
        return props.value ? props.value : state.currentValue;
      })
    });
    return {
      ...toRefs(state)
    };
  },
  render() {
    const { $slots, tabsClass, paneList, fatherValue, editable } = this;
    return (
      <div class={tabsClass} ref="tabs">
        <div class="r_tabs__header">
          <r-tab-nav
            paneList={paneList}
            fatherValue={fatherValue}
            father={this}
            editable={editable}
          ></r-tab-nav>
        </div>
        {$slots.default}
      </div>
    );
  }
});
</script>

<style lang="scss">
@import "../../scss/var";
@import "../../scss/mixin";
.r_tabs_top {
  .r_tabs__header {
    margin-bottom: 20px;
  }
}

.r_tabs_left {
  .r_tabs__header {
    margin-right: 10px;
  }
}

.r_tabs_border-card {
  background: #ffffff;
  border: 1px solid #dcdfe3;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}
</style>
