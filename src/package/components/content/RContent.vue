<!--
 * @Author: xry
 * @Description:
 * @Date: 2020-09-25 19:01:15
 * @LastEditTime: 2020-10-13 17:52:41
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/src/package/components/content/RContent.vue
-->
<template>
  <r-scroll :to="scrollTop" :el="scrollEl" @scroll="onScroll" @scroll-end="scrollEnd" ref="scroll">
    <div class="r-content" ref="contentBox">
      <div class="r-content-main" ref="content" :style="mainStyle">
        <slot></slot>
      </div>
      <div class="r-content-fix">
        <r-catalog :data="catalogData" :value="currentCatalog" @change="catalogChange"></r-catalog>
      </div>
    </div>
  </r-scroll>
</template>

<script>
import RCatalog from "./catalog/Catalog";
import { deepCopy } from "@/assets/js/common.js";
export default {
  name: "RContent",
  components: {
    RCatalog
  },
  data() {
    return {
      catalogData: [],
      currentCatalog: {},
      mainStyle: {},
      scrollTop: undefined,
      scrollEl: "",
      /*
      isScrolling：禁止判断当前滚动内容所在目录，在通过点击目录跳转时启用
      1、防止目录最下级的内容太短，还没到左上角，导致目录定位错误
      2、提高性能
      */
      isScrolling: false
    };
  },
  created() {},
  mounted() {
    this.setCatalogData();
    this.mainStyle = {
      width: this.$refs.contentBox.clientWidth - 200 + "px"
    };
    this.$nextTick(() => this.setInitial());
  },
  updated() {
    this.setCatalogData();
  },
  watch: {
    $route(to, from) {
      if (to !== from) {
        this.$nextTick(() => this.setInitial());
      }
    }
  },
  methods: {
    // 获取设置的标题DOM元素
    getTitles() {
      return [...(this.$refs.content.querySelectorAll("[r-content]") || [])];
    },
    getCatalogData() {
      const titles = this.getTitles();
      const catalogData = titles.map(item => ({
        key: (item && item.getAttribute("r-content")) || "",
        title: (item && item.textContent) || "",
        offsetTop: item.offsetTop
      }));
      return catalogData;
    },
    // 根据设置的标题内容设置目录数据
    setCatalogData() {
      const newCatalogData = this.getCatalogData();
      const oldCatelogData = this.catalogData;
      // 防止update时死循环
      if (JSON.stringify(newCatalogData) === JSON.stringify(oldCatelogData)) return;
      this.catalogData = newCatalogData;
    },
    setInitial() {
      const first = this.catalogData[0];
      // 第一次加载时，设置默认目录值
      this.currentCatalog = first || {};
      this.scrollTop = 0;
    },
    catalogChange(e) {
      this.scrollTop = e.offsetTop;
      this.currentCatalog = e;
      this.isScrolling = true;
    },
    // 滚动结束
    scrollEnd() {
      this.isScrolling = false;
      // 使得可以再次触发滚动
      this.scrollEl = "";
      this.scrollTop = undefined;
    },
    onScroll(scrollTop) {
      if (this.isScrolling) return;
      const contentCatalog = this.getContentCatalog(scrollTop);
      if (JSON.stringify(contentCatalog) !== JSON.stringify(this.currentCatalog) && contentCatalog)
        this.currentCatalog = contentCatalog;
    },
    // 获取当前内容是属于哪个catalog
    getContentCatalog(scrollTop) {
      const titles = deepCopy(this.catalogData);
      if (!titles.length) return "";
      const currentCatalog = titles.reverse().find(item => scrollTop >= item.offsetTop);
      if (!currentCatalog) return "";
      return currentCatalog;
    }
  }
};
</script>
<style lang="scss">
/* @import url() */
.r-content {
  overflow: auto;
  .r-content-main {
    float: left;
    width: 880px;
    padding: 20px;
  }
  .r-content-fix {
    width: 160px;
    margin: 20px;
    position: fixed;
    right: 0;
    top: 61px;
    background: #ffffff;
    z-index: 99;
  }
}
</style>
