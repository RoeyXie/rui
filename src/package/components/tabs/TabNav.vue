<!--
 * @Author: xry
 * @Description:
 * @Date: 2020-09-03 19:49:11
 * @LastEditTime: 2020-09-04 17:25:27
 * @FilePath: /Hui/rui/src/package/components/tabs/TabNav.vue
-->
<script>
import { defineComponent, onMounted, reactive, watch, toRefs } from "@vue/composition-api";
export default defineComponent({
  name: "r-tab-nav",
  customOption: "RTabNav",
  props: {
    paneList: Array,
    fatherValue: {},
    father: {},
    editable: Boolean
  },
  setup(props, { root, refs,parent }) {
    let state = reactive({
      activeName: props.fatherValue,
      activeIndex: props.fatherValue,
      csSpan: null,
      cspy: null,
      firstLeft: null,
      csIndex: null,
      navList: null
    });
    onMounted(() => {
      findInitialIndex();
      root.$nextTick(() => {
        resetStyle();
      });
    });
    watch(
      () => props.fatherValue,
      val => {
        state.activeName = val;
        state.activeIndex = val;
        findInitialIndex();
        root.$nextTick(() => {
          resetStyle();
        });
      }
    );
    const changeActive = e => {
      initialListLeft();
      let index = +e.target.id;
      let item = props.paneList[index];
      if (item.name) {
        item.$parent.$emit("input", item.name);
        item.$parent.currentValue = item.name;
        state.activeName = item.name;
      } else {
        item.$parent.currentValue = index;
        state.activeIndex = index;
      }
      resetStyle();
      props.father.$emit("click", item);
    };
    const initialListWidth = () => {
      let listWidth;
      state.navList = refs.test;
      listWidth = state.navList.reduce((total, item) => {
        return total + item.offsetWidth;
      }, 0);
      listWidth += 5; // 2px的预留
      refs.list.style.width = listWidth + "px";
    };
    const initialScoll = () => {
      state.csSpan = refs.span[state.csIndex];
      refs.scoll.style.width = state.csSpan.offsetWidth + "px";
      state.cspy = state.csSpan.getBoundingClientRect().left - state.firstLeft;
      refs.scoll.style.transform = `translateX(${state.cspy}px)`;
    };
    const initialListLeft = () => {
      state.firstLeft = refs.list.getBoundingClientRect().left;
    };
    const findInitialIndex = () => {
      props.paneList.forEach((item, index) => {
        item.index = index;
        if ((item.name === state.activeName && state.activeName) || index === state.activeIndex) {
          state.csIndex = index;
        }
      });
    };
    const handleClose = () => {
      parent.$emit("tab-remove", state.activeName);
      const index = findInitialIndex();
      props.paneList.splice(index,1);
    };
    const resetStyle = () => {
      initialListLeft();
      initialListWidth();
      initialScoll();
    };
    return {
      ...toRefs(state),
      changeActive,
      handleClose
    };
  },
  render() {
    let { paneList, activeName, activeIndex, changeActive, handleClose, editable } = this;
    editable = false
    let scrollBtn = [];
    paneList.forEach((item, index) => {
      const tabLabelContent = item.$slots.label || item.label;
      const closeDom =
        editable && ((item.name === activeName && activeName) || index === activeIndex) ? (
          <i class="iconfont icon-guanbi close-icon" onClick={handleClose}></i>
        ) : null;
      let i = (
        <div
          class={{
            r_tab_nav_pane: true,
            isActive: (item.name === activeName && activeName) || index === activeIndex
          }}
          key={index}
          id={index}
          ref="test"
          refInFor
        >
          <span ref="span" refInFor>
            <span class="r_tab_nav_label" onClick={changeActive} id={index}>
              {tabLabelContent}
            </span>
            {closeDom}
          </span>
        </div>
      );
      scrollBtn.push(i);
    });
    return (
      <div class="r_tab_nav">
        <div class="r_tab_nav_warp" ref="navbox">
          <div class={{ r_tab_nav_scoll: true }} ref="scoll"></div>
          <div class="r_tab_nav_list" ref="list">
            {scrollBtn}
          </div>
        </div>
      </div>
    );
  }
});
</script>

<style lang="scss" scoped>
@import "../../scss/var";
@import "../../scss/mixin";
.r_tabs_top {
  .r_tab_nav {
    .r_tab_nav_warp {
      overflow: auto;
      margin-bottom: -1px;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: #e4e7ed;
        z-index: 1;
      }
      .r_tab_nav_scoll {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px;
        background-color: $color-blue;
        z-index: 2;
        transform: translateX(0px);
        transition: all 0.3s;
      }
    }

    .r_tab_nav_list {
      overflow: hidden;
      .r_tab_nav_pane {
        height: 40px;
        line-height: 40px;
        display: inline-block;
        list-style: none;
        font-size: 14px;
        font-weight: 500;
        color: #303133;
        position: relative;
        padding: 0 20px;
        .r_tab_nav_label {
          cursor: pointer;
          display: inline-block;
          height: 40px;
          line-height: 40px;
          * {
            pointer-events: none;
            line-height: 37px;
          }
        }
      }
      .r_tab_nav_pane:first-child {
        padding-left: 0;
      }

      .r_tab_nav_pane:last-child {
        padding-right: 0;
      }
      .isActive {
        color: $color-blue;
      }
      .close-icon {
        font-size: 12px;
        cursor: pointer;
        border-radius: 50%;
        margin-left: 8px;
        &:hover {
          background-color: #c0c4cc;
          color: #fff;
        }
      }
    }
  }
}

.r_tabs_card.r_tabs_top {
  .r_tab_nav {
    .r_tab_nav_warp {
      &:after {
        height: 1px;
        background-color: #e4e7ed;
      }
      .r_tab_nav_scoll {
        display: none;
      }
    }
    .r_tab_nav_list {
      .r_tab_nav_pane {
        padding: 0 20px;
        border-left: 1px solid #e4e7ed;
        border-top: 1px solid #e4e7ed;
        // .r_tab_nav_label {
        //   padding: 0 20px;
        // }
      }
      .isActive {
        background-color: #ffffff;
        color: $color-blue;
        margin-bottom: -1px;
        z-index: 2;
        height: 41px;
      }
      .r_tab_nav_pane:first-child {
        border-top-left-radius: 4px;
      }
      .r_tab_nav_pane:last-child {
        border-right: 1px solid #e4e7ed;
        border-top-right-radius: 4px;
      }
    }
  }
}

.r_tabs_border-card.r_tabs_top {
  margin-top: -1px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
  border: 1px solid #e4e7ed;
  .r_tab_nav {
    background-color: #f5f7fa;
    .r_tab_nav_warp {
      &:after {
        height: 1px;
        background-color: #e4e7ed;
      }
      .r_tab_nav_scoll {
        display: none;
      }
    }
    .r_tab_nav_list {
      .r_tab_nav_pane {
        padding: 0 20px;
        border-right: 1px solid #f5f7fa;
        border-left: 1px solid #f5f7fa;
        color: #909399;
        // .r_tab_nav_label {
        //   padding: 0 20px;
        // }
      }
      .isActive {
        background-color: #ffffff;
        border-right: 1px solid #e4e7ed;
        border-left: 1px solid #e4e7ed;
        border-bottom: 1px solid #ffffff;
        color: $color-blue;
        margin-bottom: -1px;
        z-index: 2;
      }
      .r_tab_nav_pane:first-child {
        border-left: 0px;
      }
    }
  }
}

.r_tabs_left {
  display: flex;
  .r_tab_nav {
    .r_tab_nav_warp {
      overflow: auto;
      margin-bottom: -1px;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 100%;
        width: 2px;
        background-color: #e4e7ed;
        z-index: 1;
      }
      .r_tab_nav_scoll {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px;
        background-color: $color-blue;
        z-index: 2;
        transform: translateX(0px);
        transition: all 0.3s;
      }
    }

    .r_tab_nav_list {
      overflow: hidden;
      .r_tab_nav_pane {
        height: 40px;
        line-height: 40px;
        list-style: none;
        font-size: 14px;
        font-weight: 500;
        color: #303133;
        position: relative;
        padding: 0 20px;
        text-align: right;
        .r_tab_nav_label {
          cursor: pointer;
          * {
            pointer-events: none;
          }
        }
      }
      .isActive {
        color: $color-blue;
      }
    }
  }
}
</style>
