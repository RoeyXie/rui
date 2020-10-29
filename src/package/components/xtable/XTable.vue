<!--
 * @Author: xry
 * @Description:
 * @Date: 2020-09-04 19:23:46
 * @LastEditTime: 2020-10-23 17:56:02
 * @FilePath: /Hui/rui/src/package/components/xtable/XTable.vue
-->
<template>
  <div class="x-table">
    <div v-if="searchFormCfgData || $slots.searchform" class="x-table__searchform">
      <div class="x-table__searchinner">
        <x-form
          v-model="searchParams"
          v-if="searchFormCfgData"
          :cfgdata="searchFormCfgData"
          @keyup.enter.native="reflashTableData()"
          ref="xform"
          inline
          size="small"
        >
          <template #searchBtn>
            <el-button
              v-loading="tableLoading"
              @click="reflashTableData"
              type="primary"
              size="small"
              style="margin-left: 5px;"
              >查询</el-button
            >
            <el-button @click="resetSearch" size="small">重置</el-button>
          </template>
        </x-form>
        <slot v-if="$slots.searchform && !searchFormCfgData" name="searchform" />
      </div>
    </div>
    <!-- 工具条 -->
    <div class="x-table__toolbar" v-if="$slots.toolbar || operates.includes('add')">
      <el-button
        v-if="operates.includes('add')"
        @click="add"
        type="primary"
        icon="md-add-circle"
        size="small"
        >新增</el-button
      >
      <slot name="toolbar"></slot>
    </div>
    <!-- 表格 -->
    <div v-loading="tableLoading">
      <el-table
        ref="xtable"
        :data="tableData"
        :border="border"
        :row-key="hasKey ? rowKeys.id : null"
        @select="handleSelect"
        @select-all="handleSelectAll"
        @row-click="getCurrentRow"
        v-bind="$attrs"
        tooltip-effect="dark"
        size="small"
      >
        <!-- 多选按钮 -->
        <el-table-column
          v-if="isMultipleSelect"
          type="selection"
          width="40"
          :reserve-selection="true"
        />
        <!-- 单选按钮 -->
        <el-table-column v-if="isSingleSelect" label="选择" width="55">
          <template #default="scope">
            <el-radio v-model="radio" :label="scope.row[rowKeys.id]">{{ test }}</el-radio>
          </template>
        </el-table-column>
        <!-- 其余表格字段 -->
        <x-table-column v-for="column of currentColumns" :key="column.key" :column="column">
          <!-- 关键：将传入的具名插槽声明透传 -->
          <template v-for="columnKey of getColumnKeys(column)" #[columnKey]="{ row, index }">
            <slot :name="columnKey" :row="row" :index="index"> </slot>
          </template>
        </x-table-column>

        <!-- 操作列 -->
        <el-table-column
          v-if="$scopedSlots.toolColumn || this.showToolColumn"
          label="操作"
          fixed="right"
          :width="toolWidth"
          align="center"
        >
          <template #default="{ row }">
            <span ref="hhh">
              <slot name="tool" :row="row"></slot>
              <el-button
                v-if="operates.includes('check')"
                type="text"
                size="small"
                @click="check(row)"
                >详情</el-button
              >
              <el-button
                v-if="operates.includes('edit')"
                type="text"
                size="small"
                @click="edit(row)"
                >修改</el-button
              >
              <el-popconfirm title="确定删除此数据吗？" @onConfirm="deleteRow(row)">
                <el-button
                  type="text"
                  size="small"
                  slot="reference"
                  style="margin-left: 10px"
                  v-if="operates.includes('delete')"
                  >删除</el-button
                ></el-popconfirm
              ></span
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div v-if="isPage" style="text-align: right; padding-top: 10px;">
        <el-pagination
          background
          :current-page.sync="page"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="size"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
        />
      </div>
    </div>
    <!-- 多选title -->
    <div v-if="isMultipleSelect && showTag" style="margin-top: 10px;">
      <span>已选：</span>
      <span v-if="tags && tags.length === 0">暂无信息</span>
      <span v-for="(tag, i) in tags" :key="tag[rowKeys.id]" class="select-tag">
        <el-tag
          style="border: none; margin-bottom: 2px;"
          :disable-transitions="false"
          closable
          @close="handleCloseTag(tag, i)"
          >{{ tag.name }}</el-tag
        >
      </span>
    </div>

    <el-dialog
      :title="operate.title"
      :visible.sync="operate.show"
      :width="operate.dialogWidth"
      :append-to-body="true"
    >
      <x-form
        v-if="operate.show"
        v-model="operate.data"
        v-bind="operate"
        size="small"
        ref="operateForm"
      >
      </x-form>
      <template #footer>
        <div class="dialog-footer" style="text-align:center">
          <el-button @click="closedialog" size="small">关 闭</el-button>
          <el-button
            v-if="['edit', 'add'].includes(operate.type)"
            type="primary"
            @click="save"
            size="small"
            >保 存</el-button
          >
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script>
import axios from "axios";
import XTableColumn from "./XTableColumn";
import ColWidth from "./ColWidth";
import getColumnKeys from "./table";
import { deepCopy } from "@/assets/js/common.js";

export default {
  name: "XTable",
  components: { XTableColumn },
  props: {
    // 表头配置数据
    columns: {
      type: Array,
      default: () => []
    },
    // url
    url: {
      type: Object,
      default: () => ({
        searchUrl: "",
        addUrl: "",
        updateUrl: "",
        deleteUrl: ""
      })
    },
    defaultData: {
      type: Array,
      default: () => []
    },
    // 查询栏参数
    searchParams: {
      type: Object,
      default: () => ({})
    },
    // 查询栏配置数据
    searchFormCfg: {
      type: Array,
      default: () => []
    },
    // 是否分页
    isPage: {
      type: Boolean,
      default: true
    },
    // 是否有border
    border: {
      type: Boolean,
      default: true
    },
    // 是否自动撑开（默认自动撑开表格）
    autoWidth: {
      type: Boolean,
      default: true
    },
    // 是否初始加载
    initial: {
      type: Boolean,
      default: true
    },
    // 是否单选表格
    isSingleSelect: {
      type: Boolean,
      default: false
    },
    // 是否多选表
    isMultipleSelect: {
      type: Boolean,
      default: false
    },
    // 挑选表格必须配置
    rowKeys: {
      type: Object,
      default: () => ({
        id: "id",
        name: "name"
      })
    },
    // 当前选中数据
    value: {
      type: [Array, Object]
    },
    // 是否显示tag，只有多选表格有效
    showTag: {
      type: Boolean,
      default: true
    },
    // 操作按钮
    operates: {
      type: Array,
      default: () => []
    },
    // 操作列宽度
    toolWidth: {
      type: Number,
      default: 120
    },
    // 新增修改查询表单配置参数
    operateFormCfg: {
      type: Object,
      default: () => ({
        params: {}, // 新增表单初始化值
        formdata: [], // 表单配置数据
        columns: 2, // x-form 的columns可以数字，可以数组
        title: "", // dialog的标题名称
        lableWidth: "120px", // 新增修改的lableWidth
        dialogWidth: "50%",
        formRules: {}
      })
    },
    // 操作函数
    dualfuns: {
      type: Object,
      default: () => ({
        dualSubmitFormData: params => {
          // 这是放置新增修改表单参数处理函数的，需要return一个值
          return params;
        },
        dualReceiveFormData: params => {
          // 这是放置修改查询表单参数处理函数的，需要return一个值
          return params;
        },
        dualSubmitListData: params => {
          // 这是放置筛选框表单处理函数的，需要return一个值
          return params;
        },
        dualReceiveListData: params => {
          // 这是放置表格数据处理函数的，需要return一个值
          return params;
        }
      })
    }
  },
  data() {
    return {
      radio: null,
      tableLoading: false,
      tableData: [],
      size: 10,
      total: 0,
      page: 1,
      tags: [],
      test: "",
      currentColumns: [],
      // 新增编辑查看模态框配置数据
      operate: {
        show: false,
        type: "",
        title: "",
        data: {},
        disabled: false,
        cfgdata: [],
        columns: 2,
        lableWidth: "",
        formRules: [],
        dialogWidth: ""
      },
      getColumnKeys
    };
  },
  computed: {
    searchFormCfgData() {
      const key = Object.keys(this.searchFormCfg).length;
      return key > 0
        ? this.searchFormCfg.concat({
            key: "searchBtn",
            title: "查询按钮"
          })
        : false;
    },
    isOperate() {
      return (
        this.operateFormCfg &&
        this.operateFormCfg.formdata &&
        this.operateFormCfg.formdata.length > 0
      );
    },
    showToolColumn() {
      return (
        this.operates.includes("check") ||
        this.operates.includes("edit") ||
        this.operates.includes("delete")
      );
    },
    hasKey() {
      return this.isSingleSelect || this.isMultipleSelect;
    }
  },
  watch: {
    tags(newVal) {
      if (this.isMultipleSelect) {
        this.$emit("input", newVal);
      }
    },
    value: {
      handler(newVal) {
        if (this.isMultipleSelect) {
          // 多选框，当值改变时重新渲染表格选中数据与tags
          this.tags = newVal;
          if (this.$refs.xtable) this.preToggleSelection();
        }
        if (this.isSingleSelect) this.radio = newVal && newVal[this.rowKeys.id];
      },
      immediate: true
    }
  },
  mounted() {
    // 是否初始化
    if (this.initial) {
      this.resetData();
    }
  },
  methods: {
    // 处理表头
    handleColumns(columns) {
      // 增加表头宽度
      return this.autoWidth ? new ColWidth(columns || this.columns, this.tableData) : columns;
    },
    // 点击重置按钮 // 后期会作废
    resetSearch() {
      this.$refs.xform.resetFields();
      this.$emit("reset-searchform");
    },
    // 初始化数据
    resetData() {
      if (this.defaultData && this.defaultData.length > 0) {
        if (this.isPage) {
          const start = (this.page - 1) * this.size;
          const end = this.page * this.size;
          this.tableData = this.defaultData.slice(start, end);
          this.total = this.defaultData.length;
        } else {
          this.tableData = this.defaultData;
        }
        this.currentColumns = this.handleColumns(this.columns, this.tableData);
      } else {
        this.getTableData();
      }
    },
    // 清除表格数据
    clearData() {
      this.tableData = [];
    },
    // [分页] 当前页码数量
    handleSizeChange(val) {
      this.size = val;
      this.page = 1;
      this.resetData();
    },
    // [分页] 当前页码
    handleCurrentChange(val) {
      this.page = val;
      this.resetData();
    },
    // 多选表格挑选修改tags
    handleSelect(rows, row) {
      const rowIndex = this.tags.findIndex(item => item.id === row[this.rowKeys.id]);
      if (rowIndex > -1) {
        this.tags.splice(rowIndex, 1);
      } else {
        this.tags.push({ id: row[this.rowKeys.id], name: row[this.rowKeys.name] });
      }
    },
    // 点击全选按钮
    handleSelectAll(rows) {
      const allSelected = !!rows.length;
      for (const row of this.tableData) {
        const rowIndex = this.tags.findIndex(item => item.id === row[this.rowKeys.id]);
        if (allSelected) {
          // 全选
          if (rowIndex === -1)
            this.tags.push({ id: row[this.rowKeys.id], name: row[this.rowKeys.name] });
        } else {
          // 全部取消
          if (rowIndex > -1) this.tags.splice(rowIndex, 1);
        }
      }
    },
    // 关闭按钮
    handleCloseTag(tag) {
      const rowIndex = this.tags.findIndex(item => item.id === tag[this.rowKeys.id]);
      this.tags.splice(rowIndex, 1);
    },
    // 重置表格选中状态
    preToggleSelection() {
      const selectedIds = this.tags.map(item => item.id);
      const rows = this.tableData.filter(item => selectedIds.includes(item[this.rowKeys.id]));
      this.$refs.xtable.clearSelection();
      this.toggleSelection(rows, true);
    },
    // 重置表格选中状态（调用element内部函数）
    toggleSelection(rows, selected) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.xtable.toggleRowSelection(row, selected);
        });
      } else {
        this.$refs.xtable.clearSelection();
      }
    },
    // 刷新表格（一般外部调用）
    reflashTableData(otherParams) {
      this.page = 1;
      this.size = 10;
      this.getTableData(otherParams);
    },
    // 获取表格数据
    getTableData(otherParams) {
      this.tableLoading = true;
      const pageParams = this.isPage
        ? {
            page: this.page,
            size: this.size
          }
        : { page: 1, size: 1000 };
      let params = Object.assign({}, this.searchParams, pageParams, otherParams);
      if (this.dualfuns && this.dualfuns.dualSubmitListData) {
        params = this.dualfuns.dualSubmitListData(params);
      }
      // console.log("查询通用列表入参", params);
      axios(this.url.searchUrl, { params })
        .then(res => {
          res = res.data.data;
          if (this.dualfuns && this.dualfuns.dualReceiveListData) {
            res = this.dualfuns.dualReceiveListData(res);
          }
          // console.log("查询通用列表出参", res);
          if (this.isPage) {
            this.tableData = res.rows;
            this.total = res.total;
          } else {
            this.tableData = res;
          }
          // 渲染多选选中状态
          if (this.isMultipleSelect) this.preToggleSelection();
          // 渲染单选选中状态
          if (this.isSingleSelect) this.radio = this.value && this.value[this.rowKeys.id];
          this.currentColumns = this.handleColumns(this.columns, this.tableData);
          this.tableLoading = false;
        })
        .catch(res => {
          console.log("查询通用列表失败", res);
          this.tableLoading = false;
        });
    },
    // 选中行
    getCurrentRow(curRow) {
      if (this.isSingleSelect) {
        // 单选抛出id和name
        this.radio = curRow[this.rowKeys.id];
        this.$emit("input", { id: curRow[this.rowKeys.id], name: curRow[this.rowKeys.name] });
      } else if (this.isMultipleSelect) {
        // 多选切换选中状态
        this.handleSelect(undefined, curRow);
      }
    },
    handle(type, row) {
      switch (type) {
        case "add":
          this.operate = {
            title: `新增${this.operateFormCfg.title || ""}`,
            show: true,
            disabled: false,
            type,
            data: deepCopy(this.operateFormCfg.params)
          };
          this.$set(this.operate, "formRules", this.operateFormCfg.formRules);
          break;
        case "edit":
          this.operate = {
            title: `修改${this.operateFormCfg.title || ""}`,
            show: true,
            disabled: false,
            type: "edit",
            data: deepCopy(row)
          };
          this.$set(this.operate, "formRules", this.operateFormCfg.formRules);
          break;
        case "check":
          this.operate = {
            title: `查询${this.operateFormCfg.title || ""}`,
            show: true,
            disabled: true,
            type: "check",
            data: deepCopy(row)
          };
          break;
      }
      this.$set(this.operate, "cfgdata", this.operateFormCfg.formdata);
      this.$set(this.operate, "columns", this.operateFormCfg.columns || 2);
      this.$set(this.operate, "lableWidth", this.operateFormCfg.lableWidth || "120px");
      this.$set(this.operate, "dialogWidth", this.operateFormCfg.dialogWidth || "50%");
      this.$nextTick(() => {
        if (this.$refs.operateForm) {
          this.$refs.operateForm.$refs.form.clearValidate();
        }
      });
    },
    add() {
      this.$emit("add");
      if (this.url.addUrl && this.isOperate) {
        this.handle("add");
      }
    },
    check(row) {
      this.$emit("check", row);
      if (this.isOperate) {
        this.handle("check", row);
      }
    },
    edit(row) {
      this.$emit("edit", row);
      if (this.url.updateUrl && this.isOperate) {
        this.handle("edit", row);
      }
    },
    deleteRow(row) {
      this.$emit("delete", row);
      if (this.url.deleteUrl) {
        this.deleteInterface({ id: row.id }).then(res => {
          const success = res.data.code === 200;
          this.$message({
            type: success ? "success" : "error",
            message: success ? "删除成功！" : res.data.msg
          });
          if (success) {
            this.reflashTableData();
            this.$emit("after-delete");
          }
        });
      }
    },
    // 删除接口
    deleteInterface(params) {
      return axios({
        url: this.url.deleteUrl,
        method: "post",
        data: params
      });
    },
    // 弹层点击关闭
    closedialog() {
      this.operate.show = false;
    },
    // 弹层点击保存
    save() {
      this.$refs.operateForm.validate(valid => {
        if (valid) {
          let params = Object.assign({}, this.operate.data);
          if (this.dualfuns && this.dualfuns.dualSubmitFormData) {
            params = this.dualfuns.dualSubmitFormData(params);
          }
          this.callDataInterface(params);
        } else {
          this.$message({
            message: "请正确填写星号内容信息!!",
            type: "error"
          });
          return false;
        }
      });
    },
    // 新增修改接口
    dataInterface(params) {
      const data = Object.assign({}, params);
      return axios({
        url: this.operate.type === "add" ? this.url.addUrl : this.url.updateUrl,
        method: "post",
        data
      });
    },
    // 调用新增修改接口
    callDataInterface(params) {
      this.dataInterface(params)
        .then(res => {
          const typeMsg = this.operate.type === "add" ? "新增成功！" : "修改成功！";
          const success = res.data.code === 200;
          this.$message({
            type: success ? "success" : "error",
            message: success ? typeMsg : res.data.msg
          });
          if (success) {
            this.operate.show = false;
            this.getTableData();
            this.$emit("after-update");
          }
        })
        .catch(err => console.log("新增/修改接口失败", err));
    }
  }
};
</script>

<style lang="scss">
.x-table {
  line-height: initial;
  .x-table__searchform {
    display: flex;
    .x-table__searchinner {
      .el-form {
        display: inline-block;
      }
    }
  }
  .x-table__searchbutton {
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 20px 0;
  }
  .x-table__toolbar {
    margin: 0 0 20px 0;
  }
  .select-tag + .select-tag {
    margin-left: 5px;
  }

  .el-table thead.is-group th {
    background: #ecf7ff;
  }

  .el-table th,
  .el-table .el-table__header-wrapper thead tr {
    background-color: #ecf7ff;
    color: #333333;
  }
  .el-table .cell {
    word-break: break-word !important;
  }
}
</style>
