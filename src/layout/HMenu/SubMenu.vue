<!--
 * @Author: xry
 * @Description:
 * @Date: 2020-08-29 23:39:49
 * @LastEditTime: 2020-08-30 15:59:52
 * @FilePath: /Hui/rui/src/layout/HMenu/SubMenu.vue
-->
<script>
import {
  defineComponent
} from "@vue/composition-api";

export default defineComponent({
  name: "SubMenu",
  props: {
    title: {
      type: String,
      default: ""
    },
    menus: {
      type: Array,
      default: () => []
    }
  },
  render() {
    const { title, menus } = this;
    const titleDom = title ? <p class="sub-title">{title}</p> : null;
    const liDom = menus.map(item => (
      <li key={item.url} class="sub-item ellipsis">
        <router-link to={item.url} class="sub-link">
          <span>{item.name}</span>
        </router-link>
      </li>
    ));
    return (
      <div class="subMenu">
        {titleDom}
        <ul>{liDom}</ul>
      </div>
    );
  }
});
</script>
<style lang="scss">
@import "@/assets/css/var";
$paddingLeft: 30px;
$paddingRight: 25px;

.sub-title {
  margin: 0;
  padding: 10px 0;
  margin-left: $paddingLeft;
  margin-right: $paddingRight;
  border-bottom: 1px solid $border-color;
  font-size: 13px;
  color: #999;
}
.sub-item {
  margin: 4px 0;

  .sub-link {
    position: relative;
    display: block;
    height: 40px;
    line-height: 40px;
    padding-left: $paddingLeft;
    padding-right: $paddingRight;
    color: rgba(0, 0, 0, 0.85);

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      border-right: 3px solid #1890ff;
      transform: scaleY(0);
      opacity: 0;
      transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
        opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    &:hover {
      color: $theme-color;
    }
    &.router-link-active {
      background-color: #e6f7ff;
      &::after {
        transform: scaleY(1);
        opacity: 1;
      }
    }
    .chinese {
      padding-left: 10px;
      font-weight: 400;
      font-size: 12px;
      opacity: 0.67;
    }
  }
}
</style>
