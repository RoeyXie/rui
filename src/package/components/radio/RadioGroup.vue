<!--
 * @Author: xry
 * @Description:
 * @Date: 2020-09-01 09:41:17
 * @LastEditTime: 2020-09-01 15:28:43
 * @FilePath: /Hui/rui/src/package/components/radio/RadioGroup.vue
-->
<script>
import {
  defineComponent
} from "@vue/composition-api";
export default defineComponent({
  name: "r-radio-group",
  customOption: "RRadioGroup",
  props: {
    value: {},
    size: String,
    fill: String,
    textColor: String,
    disabled: Boolean
  },
  render() {
    const { $slots } = this;
    return (
      <div class="r_radio_group" role="radiogroup">
         {$slots.default}
      </div>
    );
  }
});
</script>

<style lang="scss">
@import "../../scss/var";
@import "../../scss/mixin";

.r_radio_group {
  //   overflow: hidden;
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
  font-size: 0;
}
</style>
