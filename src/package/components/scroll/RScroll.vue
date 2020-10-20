<!--
 * @Author: xry
 * @Description: 滚动
 * @Date: 2020-09-25 15:50:11
 * @LastEditTime: 2020-10-20 11:10:13
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/src/package/components/scroll/RScroll.vue
-->
<template>
  <div class="r-scroll" :style="scrollStyle" @scroll.passive="onScroll" ref="scroll">
    <slot></slot>
  </div>
</template>

<script>
import { getPx } from "@/assets/js/common.js";

export default {
  name: "RScroll",
  props: {
    to: {
      type: [Number, String]
      // 不能有默认值，否则当先通过el跳转后，再输入0时，由于to原本就是0，不触发to的函数
    },
    el: {
      type: String,
      default: ""
    },
    // 滚动持续时长，单位ms
    transition: {
      type: Number,
      default: 200
    },
    height: {
      tyep: [Number, String],
      // 默认继承父元素高度
      default: "100%"
    }
  },
  data() {
    return {
      scrollTop: 0
    };
  },
  created() {},
  mounted() {},
  computed: {
    scrollStyle() {
      return {
        height: getPx(this.height)
      };
    }
  },

  watch: {
    to: {
      handler(val) {
        if (!val && val !== 0) return;
        this.scrollTo(val);
      }
    },
    el: {
      handler(val) {
        if (!val) return;
        this.scrollTo(val);
      }
    },
    scrollTop(val) {
      // 需要在这里抛出scroll事件，配合scroll-end的nextTick才能保证最后一次的scroll-end在scroll之后
      this.$emit("scroll", val);
    }
  },
  methods: {
    // 滚动时
    onScroll(e) {
      this.scrollTop = e.target.scrollTop;
      // console.log(this.scrollTop);
    },
    // 滚动主函数
    scrollTo(target) {
      const start = this.scrollTop;
      const el = this.$refs.scroll;

      // 不能超过可滚动最大距离
      const end = Math.min(this.getScrollTop(target), this.getMaxScroll());

      this.animate({ el, start, end });
    },
    // 滚动动画
    animate({ el, start = 0, end = 0 }) {
      const isDown = end > start;
      let range = Math.abs(end - start);
      const step = ~~(Math.abs(range / 60) * (1 / (this.transition / 1000)));

      const go = () => {
        if (isDown) {
          // 向下滚动
          start += step;
          if (start > end) {
            start = end;
          }
        } else {
          // 向上滚动
          start -= step;
          if (start < end) {
            start = end;
          }
          if (start < 0) {
            start = 0;
          }
        }
        el.scrollTop = start;
        this.scrollTop = start;
        range -= step;
        if (range > 0) {
          requestAnimationFrame(go);
        } else {
          this.scrollEnd();
        }
      };

      go();
    },
    // 获取最终滚动的高度
    getScrollTop(val) {
      let scrollTop = 0;
      if (typeof val === "string") {
        let el = document.querySelector(val);
        if (el) scrollTop = el.offsetTop;
      } else if (typeof val === "number") {
        scrollTop = val;
      }
      return scrollTop;
    },
    // 滚动结束
    scrollEnd() {
      this.$nextTick(() => {
        // 在这里抛出滚动结束事件
        this.$emit("scroll-end", this.scrollTop);
      });
    },
    // 设置可滚动最大距离
    getMaxScroll() {
      const scrollEl = this.$refs.scroll;
      const maxScroll = scrollEl.scrollHeight - scrollEl.clientHeight;
      return maxScroll;
    }
  }
};
</script>
<style lang="scss">
/* @import url() */
.r-scroll {
  overflow: auto;
  position: relative;
}
</style>
