<!--
 * @Author: xry
 * @Description:
 * @Date: 2020-09-01 16:42:20
 * @LastEditTime: 2020-09-02 18:46:07
 * @FilePath: /Hui/rui/src/package/components/checkbox/CheckboxGroup.vue
-->
<script>
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  name: "r-checkbox-group",
  customOption: "RCheckboxGroup",
  props: {
    value: {},
    size: String,
    disabled: Boolean,
    max: Number,
    min: Number
  },
  render() {
    const { $slots } = this;
    return (
      <div class="r_checkbox_group" role="group">
        {$slots.default}
      </div>
    );
  }
});
</script>
<style lang="scss">
/* @import url() */
.r_checkbox_group {
  .ischecked:first-child {
    .r_checkbox_button_label {
      box-shadow: none;
    }
  }
}
</style>
