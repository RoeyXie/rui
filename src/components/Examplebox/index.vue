<!--
 * @Author: xry
 * @Description:
 * @Date: 2019-12-23 15:06:29
 * @LastEditTime: 2020-09-27 23:23:30
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/src/components/Examplebox/index.vue
-->
<script>
import { defineComponent, reactive, toRefs } from "@vue/composition-api";
import HightLight from "../HightLight/index.vue";

export default defineComponent({
  name: "Examplebox",
  components: { HightLight },
  props: {
    code: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    notes: {
      type: String,
      default: ""
    }
  },
  setup() {
    const state = reactive({
      seenLable: false,
      seenBox: false,
      labelText: "显示代码"
    });
    const changeText = () => {
      state.labelText = `${state.seenBox ? "显示" : "隐藏"}代码`;
      state.seenBox = !state.seenBox;
    };
    const enter = () => (state.seenLable = true);
    const leave = () => (state.seenLable = false);
    return {
      ...toRefs(state),
      changeText,
      enter,
      leave
    };
  },
  render() {
    const {
      seenLable,
      labelText,
      seenBox,
      changeText,
      $slots,
      enter,
      leave,
      code,
      title,
      notes
    } = this;
    const labelDom = seenLable ? <span>{labelText}</span> : null;
    const descriptionDom = $slots.description ? (
      <div class="description">{$slots.description}</div>
    ) : null;
    const highlightDom = $slots.highlight ? (
      <div class="highlight">{$slots.highlight}</div>
    ) : (
      <div class="highlight">
        <HightLight code={code}></HightLight>
      </div>
    );
    const contentDom = seenBox ? (
      <div class="meta">
        {descriptionDom}
        {highlightDom}
      </div>
    ) : null;
    const titleDom = title ? (
      <h3 r-content={title} class="content-title">
        {title}
      </h3>
    ) : null;
    const notesDom = notes ? <p>{notes}</p> : null;
    return (
      <div>
        {titleDom}
        {notesDom}
        <div id="examplebox" class="examplebox" onMouseenter={enter} onMouseleave={leave}>
          <div class="sourse">{$slots.sourse}</div>
          <transition name="slide-content">{contentDom}</transition>
          <div class="demo-block-control" onClick={changeText}>
            <i
              class={{
                "iconfont icon-xiangshangjiantou": seenBox,
                "iconfont icon-xiangxiajiantou": !seenBox,
                hovering: seenLable
              }}
              style="font-size: 12px;"
            ></i>
            <transition name="slide-fade2">{labelDom}</transition>
          </div>
        </div>
      </div>
    );
  }
});
</script>

<style lang="scss">
.slide-fade2-enter,
.slide-fade2-leave-to {
  transform: translateX(30px);
  opacity: 0;
}

.slide-content-enter-active {
  transition: all 0.2s ease;
}
.slide-content-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-content-enter,
.slide-content-leave-to {
  opacity: 0;
}

.examplebox {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  &:hover {
    box-shadow: 0 0 8px 0 #fafafa, 0 2px 4px 0 #fafafa;
  }
  .sourse {
    padding: 24px;
  }
  .meta {
    background-color: #fafafa;
    border-top: 1px solid #eaeefb;
    .description {
      padding: 20px;
      box-sizing: border-box;
      border: 1px solid #ebebeb;
      border-radius: 3px;
      font-size: 14px;
      line-height: 26px;
      color: #666;
      word-break: break-word;
      margin: 10px;
      background-color: #fff;
    }
    .highlight {
      padding: 18px 24px;
      padding-top: 0;
      line-height: 1.8;
      font-size: 12px;
      overflow: auto;
      &::-webkit-scrollbar {
        height: 6px;
      }
      &::-webkit-scrollbar-button {
        display: none;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: #c7c9cc;
      }
      &::-webkit-scrollbar-track {
        border-radius: 5px;
      }
    }
  }
  .demo-block-control {
    cursor: pointer;
    border-top: 1px solid #eaeefb;
    text-align: center;
    position: relative;
    color: #d3dce6;
    height: 45px;
    &:hover {
      color: #409eff;
      background-color: #fafafa;
    }
    i {
      position: absolute;
      left: 50%;
      line-height: 45px;
      transform: translateX(-50%);
      transition: 0.3s;
    }
    span {
      display: inline-block;
      line-height: 45px;
      font-size: 14px;
      transition: 0.3s;
    }
    .hovering {
      transform: translateX(-50px);
    }
  }
}
</style>
