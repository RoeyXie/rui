<script>
import { defineComponent, onMounted, reactive, toRefs, computed } from "@vue/composition-api";
export default defineComponent({
  name: "Colorbox",
  props: {
    colorText: {
      type: String,
      required: true
    },
    colorValue: {
      type: String,
      required: true
    },
    colorExample: {
      type: Number
    },
    textColor: {
      type: String,
      default: "#fff"
    }
  },
  setup(props, { refs }) {
    const state = reactive({
      colorArray: [],
      colorboxClass: computed(() => {
        return [
          "colorbox",
          props.colorExample ? "little_example" : "",
          props.colorValue === "#FFFFFF" ? "white_example" : "",
          props.colorValue === "Transparent" ? "transparent_example" : ""
        ];
      })
    });
    const setColor = () => {
      refs.colorbox.style.backgroundColor = props.colorValue;
      refs.colorbox.style.color = props.textColor;
    };
    const resetSonColorArray = () => {
      let decrease0pacity = 1 / (props.colorExample + 1);
      let sonOpacity;
      for (let i = 0; i < props.colorExample; i++) {
        sonOpacity = 1 - decrease0pacity * (i + 1);
        sonOpacity = +sonOpacity.toFixed(2);
        sonOpacity = sonOpacity <= 0 ? 0 : sonOpacity;
        state.colorArray.push(`opacity:${sonOpacity};background-color:${props.colorValue}`);
      }
    };
    onMounted(() => {
      setColor();
      if (props.colorExample) {
        resetSonColorArray();
      }
    });
    return {
      ...toRefs(state),
      setColor,
      resetSonColorArray
    };
  },
  render() {
    const { colorArray, colorboxClass, colorText, colorValue, colorExample } = this;
    const littleDom = colorArray.map(item => {
      return <div class="little_color_box" style={item}></div>;
    });
    const exampleDom = colorExample ? <div class="color_example">{littleDom}</div> : null;
    return (
      <div class="color_example_box">
        <div class={colorboxClass} ref="colorbox">
          <div class="color_text">{colorText}</div>
          <div class="color_value">{colorValue}</div>
        </div>
        {exampleDom}
      </div>
    );
  }
});
</script>

<style lang="scss">
.color_example_box {
  padding: 6px;
}
.colorbox {
  border-radius: 4px;
  padding: 16px 20px;
  height: 73px;
  box-sizing: border-box;
  font-size: 14px;
  .color_value {
    font-size: 12px;
    opacity: 0.69;
    line-height: 24px;
  }
}

.little_example {
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
}

.white_example {
  border: 1px solid rgb(238, 238, 238);
  padding: 15px 19px;
}

.transparent_example {
  border: 1px solid #fcc3c3;
  padding: 15px 19px;
}
.color_example {
  height: 40px;
  display: flex;
  .little_color_box {
    width: 100%;
    height: 40px;
    &:first-child {
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-bottom-right-radius: 4px;
    }
  }
}
</style>
