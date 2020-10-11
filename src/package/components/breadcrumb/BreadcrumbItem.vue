<script>
import {
  defineComponent,
  reactive,
  toRefs,
  computed
} from "@vue/composition-api";
export default defineComponent({
  name: "r-breadcrumb-item",
  props: {
    to: {}
  },
  setup(props, { parent, root }) {
    let state = reactive({
      father: null,
      breadcrumbItemClass: computed(() => {
        return ["r_breadcrumb_item", props.to ? "islink" : ""];
      }),
      isParent: computed(() => {
        return getParent();
      })
    });
    const handelGo = () => {
      if (props.to) {
        root.$router.push({
          path: props.to.path
        });
      }
    };
    const getParent = () => {
      let _parent = parent;
      while (_parent) {
        if (_parent.$options.customOption !== "RBreadcrumb") {
          _parent = _parent.$parent;
        } else {
          state.father = _parent;
          return true;
        }
      }
      return false;
    };
    return {
      ...toRefs(state),
      handelGo
    };
  },
  render() {
    const { $slots, breadcrumbItemClass, handelGo, father, isParent } = this;
    if (!isParent) return;
    const separaDom = father.separatorClass ? (
      <i class={["r_breadcrumb_item_sprt", "iconfont", father.separatorClass]}></i>
    ) : (
      <span class="r_breadcrumb_item_sprt">{father.separator}</span>
    );
    return (
      <span class={breadcrumbItemClass} onClick={handelGo}>
        {$slots.default}
        {separaDom}
      </span>
    );
  }
});
</script>

<style lang="scss" scoped>
@import "../../scss/var";
@import "../../scss/mixin";
.r_breadcrumb_item {
  color: #606266;
  a {
    text-decoration: none;
    font-weight: 700;
    &:link {
      color: $black-text-color;
    }
    &:visited {
      color: $black-text-color;
    }
    &:active {
      color: $color-blue;
    }
    &:hover {
      color: $color-blue;
    }
  }
}
.r_breadcrumb_item_sprt {
  color: #606266;
  font-weight: 500;
  font-size: 12px;
  margin: 0 9px;
}

.r_breadcrumb_item:last-child {
  .r_breadcrumb_item_sprt {
    display: none;
  }
}

.r_breadcrumb_item.islink {
  color: $black-text-color;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    color: $color-blue;
  }
}
</style>
