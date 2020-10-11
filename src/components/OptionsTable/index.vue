<!--
 * @Author: xry
 * @Description:
 * @Date: 2020-09-22 10:41:54
 * @LastEditTime: 2020-09-25 18:59:28
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/src/components/OptionsTable/index.vue
-->
<template>
  <div class="options-table">
    <div v-for="(item, index) of options" :key="index">
      <h4 :r-content="deleteSpace(item.title)" class="options-title">{{ item.title }}</h4>
      <x-table :columns="item.columns" :defaultData="item.data" :border="false" :isPage="false" />
    </div>
  </div>
</template>

<script>
export default {
  name: "OptionsTable",
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    deleteSpace(str) {
      return str.replace(/\s/g, "");
    }
  }
};
</script>
<style lang="scss">
/* @import url() */
.type-columns {
  .cell {
    white-space: pre;
  }
}

.options-title {
  font-size: 20px;
  margin: 30px 0 10px 0;
}
</style>
