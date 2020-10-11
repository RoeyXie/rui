<!--
 * @Author: xry
 * @Description:
 * @Date: 2020-09-04 17:26:12
 * @LastEditTime: 2020-09-04 17:45:56
 * @FilePath: /Hui/rui/src/package/components/breadcrumb/Breadcrumb.vue
-->
<script>
import { defineComponent, reactive, toRefs, computed } from "@vue/composition-api";
export default defineComponent({
  name: "r-breadcrumb",
  customOption: "RBreadcrumb",
  props: {
    separator: {
      type: String,
      default: "/"
    },
    separatorClass: {
      type: String
    }
  },
  setup() {
    let state = reactive({
      breadcrumbClass: computed(() => {
        return ["r_breadcrumb"];
      })
    });
    return {
      ...toRefs(state)
    };
  },
  render() {
    const { $slots, breadcrumbClass } = this;
    return <div class={breadcrumbClass}>{$slots.default}</div>;
  }
});
</script>

<style lang="scss">
@import "../../scss/var";
@import "../../scss/mixin";
.r_breadcrumb {
  font-size: 14px;
  line-height: 1;
}
</style>
