/*
 * @Author: xry
 * @Description:
 * @Date: 2020-09-23 10:14:08
 * @LastEditTime: 2020-09-23 11:30:47
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/src/views/xformview/options.ts
 */
export default [
  {
    title: "Form Attributes",
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
        params: "cfgdata",
        explain:
          "表单配置数据，type可选值有：text、input、textarea、select、checkbox、radio、radioButton、cascader、date、switch、inputnumber",
        type: `Array:[{
              key: 'from-item key值',
              title: 'from-item label名称',
              type: '类型',
              // "select、checkbox等的下拉"
              options: [{
                  value: "",
                  label: ""
                }],
              formItemProps: "elFormItem其他参数",
              spans: "所占表单列数",
              ...other type对应控件的参数
            }]`,
        validate: "-",
        default: "-"
      },
      {
        params: "value",
        explain: "表单初始化值，一定要传入，参数key值对应 cfgdata 里的key参数值",
        type: `Object`,
        validate: "-",
        default: "-"
      },
      {
        params: "disabled",
        explain: "表单是否只读",
        type: `[Boolean, String]`,
        validate: "-",
        default: "false"
      },
      {
        params: "columns",
        explain:
          "表单每行列数。可以传入数字如2，表示每行2列。传入[1,2]表示第一行1列，第二行2列。inline 表单下失效。",
        type: `[Number, Array]`,
        validate: "-",
        default: "1"
      },
      {
        params: "formRules",
        explain: "表单校验规则",
        type: `Object`,
        validate: "-",
        default: "-"
      },
      {
        params: "inline",
        explain: "表单校是否行内显示",
        type: `Boolean`,
        validate: "-",
        default: "false"
      }
    ]
  },
  {
    title: "Form Methods",
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
        fn: "resetFields",
        explain: "重置表单",
        params: "-"
      },
      {
        fn: "validate",
        explain: "表单校验，参数传入校验回调函数。",
        params: "Funcion"
      }
    ]
  },
  {
    title: "Form Slots",
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
        name: "cfgdata 的 key 值",
        explain: "自定义表单 form-item 内容"
      }
    ]
  }
];
