<!--
 * @Author: Hang
 * @Date: 2020-07-16 12:39:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-27 11:57:59
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/src/package/components/content/catalog/Catalog.vue
 * @Description: 暂无描述
-->
<template>
  <ul class="r-catalog" :style="style">
    <li
      v-for="item of data"
      :key="item.key"
      :class="{ 'active-catalog': item.key === currentKey.key }"
      @click="changeCatalog(item)"
    >
      <div class="ellipsis">
        {{ item.title }}
      </div>
    </li>
  </ul>
</template>

<script>
import { getPx } from "@/assets/js/common.js";
export default {
  name: "RCatalog",
  props: {
    width: {
      type: [String, Number],
      default: 150
    },
    data: {
      type: Array,
      default: () => []
    },
    value: {
      type: [String, Object],
      default: ""
    }
  },
  data() {
    return {
      currentKey: ""
    };
  },
  computed: {
    style() {
      return {
        width: getPx(this.width)
      };
    }
  },
  watch: {
    value: {
      handler(val) {
        this.currentKey = val;
      },
      immediate: true
    },
    currentKey(val) {
      this.$emit("input", val);
    }
  },

  methods: {
    changeCatalog(key) {
      this.currentKey = key;

      // 也支持change抛出，比如滚动的场景下，v-model不合适（需要区分开值的变化是通过【点击】还是【脚本触发】）
      this.$emit("change", key);
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/var";
$paddingLeft: 20px;
$liHeight: 20px;
.r-catalog {
  font-size: 12px;
  border-left: 1px solid $border-color;
  cursor: pointer;
  li {
    height: $liHeight;
    line-height: $liHeight;
    padding-left: $paddingLeft;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: -1px;
      top: 0;
      width: 1px;
      height: 100%;
      background-color: $theme-color;
      opacity: 0;
      transition: opacity 0.3s;
    }
    &.active-catalog {
      color: $theme-color;
      &::after {
        opacity: 1;
      }
    }
  }
}
</style>
