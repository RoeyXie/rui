/*
 * @Author: xry
 * @Description:
 * @Date: 2020-09-22 14:19:42
 * @LastEditTime: 2020-09-23 11:33:15
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/src/views/xtableview/options.ts
 */
export default [
  {
    title: "Table Attributes",
    columns: [
      {
        key: "params",
        title: "参数",
        width: 130,
        align: "left"
      },
      {
        key: "explain",
        title: "说明",
        minWidth: 200,
        align: "left"
      },
      {
        key: "type",
        title: "类型",
        minWidth: 200,
        align: "left",
        className: "type-columns"
      },
      {
        key: "validate",
        title: "可选值",
        minWidth: 100,
        align: "left"
      },
      {
        key: "default",
        title: "默认值",
        minWidth: 100,
        align: "left",
        className: "type-columns"
      }
    ],
    data: [
      {
        params: "url",
        explain: "表格相关接口",
        type: `Object:
          {
            searchUrl: '查询表格数据接口',
            addUrl: '新增数据接口',
            updateUrl: '修改数据接口',
            deleteUrl: '删除数据接口'
          }`,
        validate: "-",
        default: "-"
      },
      {
        params: "columns",
        explain: "表头配置参数",
        type: `Object：
        [{
          key: '',
          title: '',
          ...other el-table-column参数
        }]`,
        validate: "-",
        default: "-"
      },
      {
        params: "default-data",
        explain: "表格默认数据，拥有默认数据则不接入API接口数据，可前端分页。",
        type: "Array",
        validate: "-",
        default: "-"
      },
      {
        params: "border",
        explain: "是否带有纵向边框",
        type: "Boolean",
        validate: "-",
        default: "true"
      },
      {
        params: "auto-width",
        explain: "是否自动撑开表头",
        type: "Boolean",
        validate: "-",
        default: "true"
      },
      {
        params: "initial",
        explain: "是否初始装载数据",
        type: "Boolean",
        validate: "-",
        default: "true"
      },
      {
        params: "search-params",
        explain: "查询栏初始化参数值，需要配合 searchFormCfg 参数使用",
        type: "Object",
        validate: "-",
        default: "-"
      },
      {
        params: "search-form-cfg",
        explain: "查询栏表单配置数据，与使用 x-form 方法一致，需要配合 searchParams 参数使用",
        type: "Array",
        validate: "-",
        default: "-"
      },
      {
        params: "is-page",
        explain: "是否分页",
        type: "Boolean",
        validate: "-",
        default: "true"
      },
      {
        params: "is-single-select",
        explain: "是否单选表格",
        type: "Boolean",
        validate: "-",
        default: "false"
      },
      {
        params: "row-keys",
        explain: "表格数据唯一标志与显示名称，在单选/多选表格里配置生效，作为挑选的唯一标志。",
        type: `Object：
        {
          id: "表格接口数据Id字段",
          name: "表格接口数据name字段"
        }`,
        validate: "-",
        default: `{
  id: "id",
  name: "name"
}`
      },
      {
        params: "value",
        explain:
          "v-model使用，为表格当前选中数据。单选Object：{ id: '', name: ''}，多选则为数组格式",
        type: "[Object, Array]",
        validate: "-",
        default: "-"
      },
      {
        params: "is-multiple-select",
        explain: "是否多选表格",
        type: "Boolean",
        validate: "-",
        default: "false"
      },
      {
        params: "show-tag",
        explain: "是否显示多选表格当前选中数据标签",
        type: "Boolean",
        validate: "-",
        default: "true"
      },
      {
        params: "operates",
        explain:
          "操作按钮，当配置 operate-form-cfg 与对应的操作 Url 后会自动生成表单，操作可变更数据。否则只配置 operates则只会显示操作按钮，点击后抛出对应事件。",
        type: "Array，值包括['add','edit','check','delete']",
        validate: "-",
        default: "-"
      },
      {
        params: "tool-width",
        explain: "表格操作列宽度",
        type: "Number",
        validate: "-",
        default: "120"
      },
      {
        params: "operate-form-cfg",
        explain: `新增/修改/查询表单配置项`,
        type: `Object：{
          params: {}, // 新增表单初始化值
          formdata: [],  // x-form 表单配置数据
          columns: 2, // x-form 的columns
          title: "", // dialog 的标题名称
          // 表单字段的lableWidth
          lableWidth: "120px",
          dialogWidth: "50%", // 弹出窗口大小
          formRules: {} // 表单校验规则
        }`,
        validate: "-",
        default: "-"
      },
      {
        params: "dualfuns",
        explain:
          "操作函数：dualSubmitFormData 对应新增修改表单提交前参数处理函数；dualSubmitListData 对应查询表格数据前参数处理函数；dualReceiveListData 对应查询表格接口返回后数据处理函数。都接收一个参数params。",
        type: `Object：
        {
          dualSubmitFormData: Function,
          dualSubmitListData: Function,
          dualReceiveListData: Function
        }`,
        validate: "-",
        default: "-"
      }
    ]
  },
  {
    title: "Table Events",
    columns: [
      {
        key: "eventName",
        title: "事件名",
        width: 130,
        align: "left"
      },
      {
        key: "explain",
        title: "说明",
        minWidth: 200,
        align: "left"
      },
      {
        key: "params",
        title: "回调参数",
        minWidth: 200,
        align: "left"
      }
    ],
    data: [
      {
        eventName: "add",
        explain: "自定义时的新增事件",
        params: "-"
      },
      {
        eventName: "edit",
        explain: "自定义时的编辑事件",
        params: "row,index"
      },
      {
        eventName: "check",
        explain: "自定义时的查询事件",
        params: "row,index"
      },
      {
        eventName: "delete",
        explain: "自定义时的删除事件",
        params: "row,index"
      },
      {
        eventName: "reset-searchform",
        explain: "点击重置按钮",
        params: ""
      },
      {
        eventName: "after-delete",
        explain: "使用内置删除数据功能模块，数据更新成功后返回",
        params: ""
      },
      {
        eventName: "after-update",
        explain: "使用内置新增修改数据功能模块，数据更新成功后返回",
        params: ""
      }
    ]
  },
  {
    title: "Table Methods",
    columns: [
      {
        key: "fn",
        title: "方法名",
        width: 130,
        align: "left"
      },
      {
        key: "explain",
        title: "说明",
        minWidth: 200,
        align: "left"
      },
      {
        key: "params",
        title: "参数",
        minWidth: 200,
        align: "left"
      }
    ],
    data: [
      {
        fn: "reflashTableData",
        explain:
          "重载表格，参数 params 作为调用查询表格接口附加参数，默认添加 search-params 与分页参数",
        params: "params"
      }
    ]
  },
  {
    title: "Table Slots",
    columns: [
      {
        key: "name",
        title: "name",
        width: 130,
        align: "left"
      },
      {
        key: "explain",
        title: "说明",
        align: "left"
      }
    ],
    data: [
      {
        name: "表头key值",
        explain: "自定义单元格内容"
      },
      {
        name: "searchform",
        explain: "自定义查询栏内容，需要自己配置查询重置按钮，查询可调用 reflashTableData 方法"
      },
      {
        name: "toolbar",
        explain: "自定义工具栏按钮"
      },
      {
        name: "tool",
        explain: "自定义表格操作列，参数为 { row }"
      }
    ]
  }
];
