<!--
 * @Author: xry
 * @Description:
 * @Date: 2020-08-31 16:30:19
 * @LastEditTime: 2020-08-31 17:14:55
 * @FilePath: /Hui/rui/src/package/components/button/ButtonGroup.vue
-->
<script>
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  name: "r-btngroup",
  render() {
    const { $slots } = this;
    return (
      <div id="buttonGroup" class="r-buttonGroup">
        {$slots.default}
      </div>
    );
  }
});
</script>

<style lang="scss">
.r-buttonGroup {
  display: inline-block;
  vertical-align: middle;
  &::after {
    clear: both;
  }
}
</style>
