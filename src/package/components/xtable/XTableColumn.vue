<!--
 * @Author: xry
 * @Description:
 * @Date: 2020-09-17 10:27:55
 * @LastEditTime: 2020-10-23 20:35:22
 * @FilePath: /Hui/rui/src/package/components/xtable/XTableColumn.vue
-->
<template>
  <el-table-column
    :key="column.key"
    :prop="column.key"
    :label="column.title"
    :min-width="column.minWidth"
    :align="column.align || 'center'"
    v-bind="column"
  >
    <template #default="{ row, $index }">
      <slot :name="column.key" :row="row" :$index="$index">
        {{ row[column.key] }}
      </slot>
    </template>
    <template v-if="column.children">
      <x-table-column
        v-for="childColumn of column.children"
        :key="childColumn.key"
        :column="childColumn"
      >
        <!-- 关键：将传入的具名插槽声明透传 -->
        <template
          v-for="columnKey of getColumnKeys(childColumn)"
          #[columnKey]="{ row, $index }"
        >
          <slot :name="columnKey" :row="row" :$index="$index"> </slot>
        </template>
      </x-table-column>
    </template>
  </el-table-column>
</template>

<script>
import getColumnKeys from "./table.js";
export default {
  name: "XTableColumn",
  props: {
    column: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      getColumnKeys
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss">
/* @import url() */
</style>
