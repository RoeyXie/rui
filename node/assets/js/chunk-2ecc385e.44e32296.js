(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ecc385e"],{"3a13":function(e,c,o){},4489:function(e,c,o){"use strict";o.r(c);var t=function(){var e=this,c=e.$createElement,o=e._self._c||c;return o("div",{staticClass:"checkboxviewapp",attrs:{id:"checkboxviewapp"}},[o("h2",[e._v(e._s(e.title))]),o("p",[e._v(e._s(e.description))]),o("div",{staticClass:"suchas"},[o("examplebox",{attrs:{code:e.demo1.code,title:e.demo1.title,notes:e.demo1.notes},scopedSlots:e._u([{key:"sourse",fn:function(){return[o("r-checkbox",{model:{value:e.checked,callback:function(c){e.checked=c},expression:"checked"}},[e._v("备选项")])]},proxy:!0},{key:"description",fn:function(){return[o("div",[e._v(" 在r-checkbox元素中定义 "),o("code",[e._v("v-model")]),e._v(" 绑定变量，单一的checkbox中，默认绑定变量的值会是 "),o("code",[e._v("Boolean")]),e._v(" ，选中为 "),o("code",[e._v("true")]),e._v(" 。 ")])]},proxy:!0}])})],1),o("div",{staticClass:"suchas"},[o("examplebox",{attrs:{code:e.demo2.code,title:e.demo2.title,notes:e.demo2.notes},scopedSlots:e._u([{key:"sourse",fn:function(){return[o("r-checkbox",{attrs:{disabled:""},model:{value:e.checked1,callback:function(c){e.checked1=c},expression:"checked1"}},[e._v("备选项1")]),o("r-checkbox",{attrs:{disabled:""},model:{value:e.checked2,callback:function(c){e.checked2=c},expression:"checked2"}},[e._v("备选项2")])]},proxy:!0},{key:"description",fn:function(){return[o("div",[e._v("设置 "),o("code",[e._v("disabled")]),e._v(" 属性即可。")])]},proxy:!0}])})],1),o("div",{staticClass:"suchas"},[o("examplebox",{attrs:{code:e.demo3.code,title:e.demo3.title,notes:e.demo3.notes},scopedSlots:e._u([{key:"sourse",fn:function(){return[o("r-checkbox-group",{model:{value:e.checkList,callback:function(c){e.checkList=c},expression:"checkList"}},[o("r-checkbox",{attrs:{label:"复选框 A"}}),o("r-checkbox",{attrs:{label:"复选框 B"}}),o("r-checkbox",{attrs:{label:"复选框 C"}}),o("r-checkbox",{attrs:{label:"禁用",disabled:""}}),o("r-checkbox",{attrs:{label:"选中且禁用",disabled:""}})],1)]},proxy:!0},{key:"description",fn:function(){return[o("div",[e._v(" checkbox-group元素能把多个 checkbox 管理为一组，只需要在 Group 中使用 "),o("code",[e._v("v-model")]),e._v(" 绑定Array类型的变量即可。 r-checkbox 的 "),o("code",[e._v("label")]),e._v(" 属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。 "),o("code",[e._v("label")]),e._v(" 与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。 ")])]},proxy:!0}])})],1),o("div",{staticClass:"suchas"},[o("examplebox",{attrs:{code:e.demo4.code,title:e.demo4.title,notes:e.demo4.notes},scopedSlots:e._u([{key:"sourse",fn:function(){return[o("r-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(c){e.checkAll=c},expression:"checkAll"}},[e._v("全选")]),o("div",{staticStyle:{margin:"15px 0"}}),o("r-checkbox-group",{on:{change:e.handleCheckedCitiesChange},model:{value:e.checkedCities,callback:function(c){e.checkedCities=c},expression:"checkedCities"}},e._l(e.cities,(function(c){return o("r-checkbox",{key:c,attrs:{label:c}},[e._v(e._s(c))])})),1)]},proxy:!0},{key:"description",fn:function(){},proxy:!0}])})],1),o("div",{staticClass:"suchas"},[o("examplebox",{attrs:{code:e.demo5.code,title:e.demo5.title,notes:e.demo5.notes},scopedSlots:e._u([{key:"sourse",fn:function(){return[o("r-checkbox-group",{attrs:{min:1,max:2},model:{value:e.checkedCities1,callback:function(c){e.checkedCities1=c},expression:"checkedCities1"}},e._l(e.cities,(function(c){return o("r-checkbox",{key:c,attrs:{label:c}},[e._v(e._s(c))])})),1)]},proxy:!0},{key:"description",fn:function(){},proxy:!0}])})],1),o("div",{staticClass:"suchas"},[o("examplebox",{attrs:{code:e.demo6.code,title:e.demo6.title,notes:e.demo6.notes},scopedSlots:e._u([{key:"sourse",fn:function(){return[o("div",[o("r-checkbox-group",{model:{value:e.checkboxGroup2,callback:function(c){e.checkboxGroup2=c},expression:"checkboxGroup2"}},e._l(e.cities,(function(c){return o("r-checkbox-button",{key:c,attrs:{label:c}},[e._v(e._s(c))])})),1)],1),o("div",{staticStyle:{"margin-top":"20px"}},[o("r-checkbox-group",{attrs:{size:"medium"},model:{value:e.checkboxGroup3,callback:function(c){e.checkboxGroup3=c},expression:"checkboxGroup3"}},e._l(e.cities,(function(c){return o("r-checkbox-button",{key:c,attrs:{label:c}},[e._v(e._s(c))])})),1)],1),o("div",{staticStyle:{"margin-top":"20px"}},[o("r-checkbox-group",{attrs:{size:"small"},model:{value:e.checkboxGroup4,callback:function(c){e.checkboxGroup4=c},expression:"checkboxGroup4"}},e._l(e.cities,(function(c){return o("r-checkbox-button",{key:c,attrs:{label:c,disabled:"北京"===c}},[e._v(e._s(c))])})),1)],1),o("div",{staticStyle:{"margin-top":"20px"}},[o("r-checkbox-group",{attrs:{size:"mini",disabled:""},model:{value:e.checkboxGroup5,callback:function(c){e.checkboxGroup5=c},expression:"checkboxGroup5"}},e._l(e.cities,(function(c){return o("r-checkbox-button",{key:c,attrs:{label:c}},[e._v(e._s(c))])})),1)],1)]},proxy:!0},{key:"description",fn:function(){return[e._v(" 只需要把r-checkbox元素替换为r-checkbox-button元素即可。此外，Rui 还提供了 "),o("code",[e._v("size")]),e._v(" 属性。 ")]},proxy:!0}])})],1),o("div",{staticClass:"suchas"},[o("examplebox",{attrs:{code:e.demo7.code,title:e.demo7.title,notes:e.demo7.notes},scopedSlots:e._u([{key:"sourse",fn:function(){return[o("div",[o("r-checkbox",{attrs:{label:"备选项1",border:""},model:{value:e.checked3,callback:function(c){e.checked3=c},expression:"checked3"}}),o("r-checkbox",{attrs:{label:"备选项2",border:""},model:{value:e.checked4,callback:function(c){e.checked4=c},expression:"checked4"}})],1),o("div",{staticStyle:{"margin-top":"20px"}},[o("r-checkbox",{attrs:{label:"备选项1",border:"",size:"medium"},model:{value:e.checked5,callback:function(c){e.checked5=c},expression:"checked5"}}),o("r-checkbox",{attrs:{label:"备选项2",border:"",size:"medium"},model:{value:e.checked6,callback:function(c){e.checked6=c},expression:"checked6"}})],1),o("div",{staticStyle:{"margin-top":"20px"}},[o("r-checkbox-group",{attrs:{size:"small"},model:{value:e.checkboxGroup6,callback:function(c){e.checkboxGroup6=c},expression:"checkboxGroup6"}},[o("r-checkbox",{attrs:{label:"备选项1",border:""}}),o("r-checkbox",{attrs:{label:"备选项2",border:"",disabled:""}})],1)],1),o("div",{staticStyle:{"margin-top":"20px"}},[o("r-checkbox-group",{attrs:{size:"mini",disabled:""},model:{value:e.checkboxGroup7,callback:function(c){e.checkboxGroup7=c},expression:"checkboxGroup7"}},[o("r-checkbox",{attrs:{label:"备选项1",border:""}}),o("r-checkbox",{attrs:{label:"备选项2",border:""}})],1)],1)]},proxy:!0},{key:"description",fn:function(){return[e._v(" 设置 "),o("code",[e._v("border")]),e._v(" 属性可以渲染为带有边框的多选框。 ")]},proxy:!0}])})],1)])},n=[],i=o("0d92"),r='<r-checkbox v-model="checked">备选项</r-checkbox>\n\n<script>\n  export default {\n    data () {\n      return {\n        checked: true\n      };\n    }\n  }\n<\/script>\n',s='<r-checkbox v-model="checked1" disabled>备选项</r-checkbox>\n<r-checkbox v-model="checked2" disabled>备选项</r-checkbox>\n\n<script>\n  export default {\n    data () {\n      return {\n        checked1: false\n        checked2: true\n      };\n    }\n  }\n<\/script>',l='<r-checkbox-group v-model="checkList">\n  <r-checkbox label="复选框 A">备选项</r-checkbox>\n  <r-checkbox label="复选框 B">备选项</r-checkbox>\n  <r-checkbox label="复选框 C">备选项</r-checkbox>\n  <r-checkbox label="禁用" disabled>备选项</r-checkbox>\n  <r-checkbox label="选中且禁用" disabled>备选项</r-checkbox>\n</r-checkbox-group>\n\n<script>\n  export default {\n    data () {\n      return {\n        checkList: ["选中且禁用","复选框 A"]\n      };\n    }\n  }\n<\/script>',d='<template>\n  <r-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</r-checkbox>\n  <div style="margin: 15px 0;"></div>\n  <r-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">\n    <r-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</r-checkbox>\n  </r-checkbox-group>\n</template>\n<script>\n  const cityOptions = [\'上海\', \'北京\', \'广州\', \'深圳\'];\n  export default {\n    data() {\n      return {\n        checkAll: false,\n        checkedCities: [\'上海\', \'北京\'],\n        cities: cityOptions,\n        isIndeterminate: true\n      };\n    },\n    methods: {\n      handleCheckAllChange(val) {\n        this.checkedCities = val ? cityOptions : [];\n        this.isIndeterminate = false;\n      },\n      handleCheckedCitiesChange(value) {\n        let checkedCount = value.length;\n        this.checkAll = checkedCount === this.cities.length;\n        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;\n      }\n    }\n  };\n<\/script>\n',a='<r-checkbox-group v-model="checkedCities" :min="1" :max="2">\n  <r-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</r-checkbox>\n</r-checkbox-group>\n\n<script>\nconst cityOptions = [\'上海\', \'北京\', \'广州\', \'深圳\'];\n  export default {\n    data () {\n      return {\n        checkedCities: ["上海","北京"],\n        cities: cityOptions\n      };\n    }\n  }\n<\/script>\n',h='<div>\n  <r-checkbox-group v-model="checkboxGroup1">\n    <r-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</r-checkbox>\n  </r-checkbox-group>\n</div>\n<div style="margin-top: 20px">\n  <r-checkbox-group v-model="checkboxGroup2" size="medium">\n    <r-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</r-checkbox>\n  </r-checkbox-group>\n</div>\n<div style="margin-top: 20px">\n  <r-checkbox-group v-model="checkboxGroup3" size="small">\n    <r-checkbox v-for="city in cities" :label="city" :key="city" :disabled="city === \'北京\'">{{city}}</r-checkbox>\n  </r-checkbox-group>\n</div>\n<div style="margin-top: 20px">\n  <r-checkbox-group v-model="checkboxGroup4" size="mini">\n    <r-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</r-checkbox>\n  </r-checkbox-group>\n</div>\n<script>\nconst cityOptions = [\'上海\', \'北京\', \'广州\', \'深圳\'];\n  export default {\n    data () {\n      return {\n        checkboxGroup1: ["上海"],\n        checkboxGroup2: ["上海"],\n        checkboxGroup3: ["上海"],\n        checkboxGroup4: ["上海"],\n        cities: cityOptions\n      };\n    }\n  }\n<\/script>\n',k='<div>\n  <r-checkbox v-model="checked1" label="备选项1" border></r-checkbox>\n  <r-checkbox v-model="checked2" label="备选项2" border></r-checkbox>\n</div>\n<div style="margin-top: 20px">\n  <r-checkbox v-model="checked3" label="备选项1" border size="medium"></r-checkbox>\n  <r-checkbox v-model="checked4" label="备选项2" border size="medium"></r-checkbox>\n</div>\n<div style="margin-top: 20px">\n  <r-checkbox-group v-model="checkboxGroup1" size="small">\n    <r-checkbox label="备选项1" border></r-checkbox>\n    <r-checkbox label="备选项2" border disabled></r-checkbox>\n  </r-checkbox-group>\n</div>\n<div style="margin-top: 20px">\n  <r-checkbox-group v-model="checkboxGroup2" size="mini" disabled>\n    <r-checkbox label="备选项1" border></r-checkbox>\n    <r-checkbox label="备选项2" border></r-checkbox>\n  </r-checkbox-group>\n</div>\n<script>\n  export default {\n    data () {\n      return {\n        checked1: true,\n        checked2: false,\n        checked3: false,\n        checked4: true,\n        checkboxGroup1: ["备选项1"],\n        checkboxGroup2: ["备选项2"]\n      };\n    }\n  }\n<\/script>\n',b={code1:r,code2:s,code3:l,code4:d,code5:a,code6:h,code7:k},x=["上海","北京","广州","深圳"],u={name:"checkboxviewapp",components:{Examplebox:i["a"]},data:function(){return{title:"Checkbox 多选框",description:"一组备选项中进行多选",demo1:{title:"基础用法",notes:"单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。",code:b.code1},demo2:{title:"禁用状态",notes:"多选框不可用状态。",code:b.code2},demo3:{title:"多选框组",notes:"适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。",code:b.code3},demo4:{title:"indeterminate 状态",notes:"indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果",code:b.code4},demo5:{title:"可选项目数量的限制",notes:"使用 min 和 max 属性能够限制可以被勾选的项目的数量。",code:b.code5},demo6:{title:"按钮样式",notes:"按钮样式的多选组合。",code:b.code6},demo7:{title:"带有边框",code:b.code7},checked:!0,checked1:!1,checked2:!0,checkList:["选中且禁用","复选框 A"],checkAll:!1,checkedCities:["上海","北京"],cities:x,isIndeterminate:!0,checkedCities1:["上海","北京"],checkboxGroup2:["上海"],checkboxGroup3:["上海"],checkboxGroup4:["上海"],checkboxGroup5:["上海"],checked3:!0,checked4:!1,checked5:!1,checked6:!0,checkboxGroup6:["备选项1"],checkboxGroup7:["备选项2"],citytext:"{{city}}"}},methods:{handleCheckAllChange:function(e){this.checkedCities=e?x:[],this.isIndeterminate=!1},handleCheckedCitiesChange:function(e){var c=e.length;this.checkAll=c===this.cities.length,this.isIndeterminate=c>0&&c<this.cities.length}}},p=u,m=(o("5848"),o("2877")),v=Object(m["a"])(p,t,n,!1,null,null,null);c["default"]=v.exports},5848:function(e,c,o){"use strict";var t=o("3a13"),n=o.n(t);n.a}}]);
//# sourceMappingURL=chunk-2ecc385e.44e32296.js.map