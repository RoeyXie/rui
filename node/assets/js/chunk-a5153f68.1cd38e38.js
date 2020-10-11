(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a5153f68"],{"29f9":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tabsviewapp",attrs:{id:"tabsviewapp"}},[a("h2",[e._v(e._s(e.title))]),a("p",[e._v(e._s(e.description))]),a("div",{staticClass:"suchas"},[a("examplebox",{attrs:{code:e.demo1.code,title:e.demo1.title,notes:e.demo1.notes},scopedSlots:e._u([{key:"sourse",fn:function(){return[a("r-tabs",{on:{click:e.handleClick}},[a("r-tab-pane",{attrs:{label:"用户管理"}},[e._v("用户管理")]),a("r-tab-pane",{attrs:{label:"配置管理"}},[e._v("配置管理")]),a("r-tab-pane",{attrs:{label:"角色管理"}},[e._v("角色管理")]),a("r-tab-pane",{attrs:{label:"定时任务补偿"}},[e._v("定时任务补偿")])],1)]},proxy:!0},{key:"description",fn:function(){return[a("div",[e._v(" Tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 "),a("code",[e._v("value")]),e._v(" 属性来指定当前选中的标签页。 ")])]},proxy:!0}])})],1),a("div",{staticClass:"suchas"},[a("examplebox",{attrs:{code:e.demo2.code,title:e.demo2.title,notes:e.demo2.notes},scopedSlots:e._u([{key:"sourse",fn:function(){return[a("r-tabs",{attrs:{type:"card"},on:{click:e.handleClick},model:{value:e.activeName2,callback:function(t){e.activeName2=t},expression:"activeName2"}},[a("r-tab-pane",{attrs:{label:"用户管理",name:"first"}},[e._v("用户管理")]),a("r-tab-pane",{attrs:{label:"配置管理",name:"second"}},[e._v("配置管理")]),a("r-tab-pane",{attrs:{label:"角色管理",name:"third"}},[e._v("角色管理")]),a("r-tab-pane",{attrs:{label:"定时任务补偿",name:"fourth"}},[e._v("定时任务补偿")])],1)]},proxy:!0},{key:"description",fn:function(){return[a("div",[e._v(" 只需要设置 "),a("code",[e._v("type")]),e._v(" 属性为 "),a("code",[e._v("card")]),e._v(" 就可以使选项卡改变为标签风格。 ")])]},proxy:!0}])})],1),a("div",{staticClass:"suchas"},[a("examplebox",{attrs:{code:e.demo3.code,title:e.demo3.title,notes:e.demo3.notes},scopedSlots:e._u([{key:"sourse",fn:function(){return[a("r-tabs",{attrs:{type:"border-card"}},[a("r-tab-pane",{attrs:{label:"用户管理"}},[e._v("用户管理")]),a("r-tab-pane",{attrs:{label:"配置管理"}},[e._v("配置管理")]),a("r-tab-pane",{attrs:{label:"角色管理"}},[e._v("角色管理")]),a("r-tab-pane",{attrs:{label:"定时任务补偿"}},[e._v("定时任务补偿")])],1)]},proxy:!0},{key:"description",fn:function(){return[a("div",[e._v("将 "),a("code",[e._v("type")]),e._v(" 设置为 "),a("code"),e._v(" 。")])]},proxy:!0}])})],1),a("div",{staticClass:"suchas"},[a("examplebox",{attrs:{code:e.demo4.code,title:e.demo4.title,notes:e.demo4.notes},scopedSlots:e._u([{key:"sourse",fn:function(){return[a("r-tabs",{attrs:{type:"border-card"}},[a("r-tab-pane",[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"iconfont icon-riqi"}),e._v(" 我的行程 ")]),e._v(" 我的行程 ")]),a("r-tab-pane",{attrs:{label:"消息中心"}},[e._v("消息中心")]),a("r-tab-pane",{attrs:{label:"角色管理"}},[e._v("角色管理")]),a("r-tab-pane",{attrs:{label:"定时任务补偿"}},[e._v("定时任务补偿")])],1)]},proxy:!0}])})],1),a("div",{staticClass:"suchas"},[a("examplebox",{attrs:{code:e.demo5.code,title:e.demo5.title,notes:e.demo5.notes},scopedSlots:e._u([{key:"sourse",fn:function(){return[a("div",{staticStyle:{"margin-bottom":"20px"}},[a("r-btn",{attrs:{size:"small"},on:{click:function(t){return e.addTab(e.editableTabsValue)}}},[e._v("add tab")])],1),a("r-tabs",{attrs:{type:"card",editable:""},on:{"tab-remove":e.removeTab},model:{value:e.editableTabsValue,callback:function(t){e.editableTabsValue=t},expression:"editableTabsValue"}},e._l(e.editableTabs,(function(t){return a("r-tab-pane",{key:t.name,attrs:{label:t.title,name:t.name}},[e._v(e._s(t.content))])})),1)]},proxy:!0}])})],1)])},l=[],s=(a("4de4"),a("4160"),a("b0c0"),a("159b"),a("0d92")),b='<template>\n<r-tabs @click="handleClick">\n  <r-tab-pane label="用户管理">用户管理</r-tab-pane>\n  <r-tab-pane label="配置管理">配置管理</r-tab-pane>\n  <r-tab-pane label="角色管理">角色管理</r-tab-pane>\n  <r-tab-pane label="定时任务补偿">定时任务补偿</r-tab-pane>\n</r-tabs>\n</template>\n<script>\nexport default {\n  methods: {\n    handleClick(tab) {\n      console.log(tab);\n    },\n  }\n}\n<\/script>',o='<template>\n<r-tabs v-model="activeName" type="card" @click="handleClick">\n  <r-tab-pane label="用户管理" name="first">用户管理</r-tab-pane>\n  <r-tab-pane label="配置管理" name="second">配置管理</r-tab-pane>\n  <r-tab-pane label="角色管理" name="third">角色管理</r-tab-pane>\n  <r-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</r-tab-pane>\n</r-tabs>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      activeName: \'second\'\n    };\n  },\n  methods: {\n    handleClick(tab) {\n      console.log(tab);\n    },\n  }\n}\n<\/script>',r='<template>\n<r-tabs type="border-card">\n  <r-tab-pane label="用户管理">用户管理</r-tab-pane>\n  <r-tab-pane label="配置管理">配置管理</r-tab-pane>\n  <r-tab-pane label="角色管理">角色管理</r-tab-pane>\n  <r-tab-pane label="定时任务补偿">定时任务补偿</r-tab-pane>\n</r-tabs>\n</template>',i='我的行程\n<template>\n  <r-tabs type="border-card">\n    <r-tab-pane>\n      <span slot="label">\n        <i class="iconfont icon-riqi"></i>我的行程\n      </span>我的行程\n    </r-tab-pane>\n    <r-tab-pane label="消息中心">消息中心</r-tab-pane>\n    <r-tab-pane label="角色管理">角色管理</r-tab-pane>\n    <r-tab-pane label="定时任务补偿">定时任务补偿</r-tab-pane>\n  </r-tabs>\n</template>',c="<template>\n<div style=\"margin-bottom: 20px;\">\n  <r-btn size=\"small\" @click=\"addTab(editableTabsValue)\">add tab</r-btn>\n</div>\n<r-tabs v-model=\"editableTabsValue\" type=\"card\">\n  <r-tab-pane\n    v-for=\"(item, index) in editableTabs\"\n    :key=\"item.name\"\n    :label=\"item.title\"\n    :name=\"item.name\"\n  >item.content</r-tab-pane>\n</r-tabs>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      editableTabsValue: '2',\n      editableTabs: [{\n        title: 'Tab 1',\n        name: '1',\n        content: 'Tab 1 content'\n      }, {\n        title: 'Tab 2',\n        name: '2',\n        content: 'Tab 2 content'\n      }],\n      tabIndex: 2\n    }\n  },\n  methods: {\n    addTab(targetName) {\n      let newTabName = ++this.tabIndex + '';\n      this.editableTabs.push({\n        title: 'New Tab',\n        name: newTabName,\n        content: 'New Tab content'\n      });\n      this.editableTabsValue = newTabName;\n    }\n  }\n}\n<\/script>",d={code1:b,code2:o,code3:r,code4:i,code5:c},p={name:"tabsview",components:{Examplebox:s["a"]},data:function(){return{title:"Tabs 标签页",description:"分隔内容上有关联但属于不同类别的数据集合。",demo1:{title:"基础用法",notes:"基础的、简洁的标签页。",code:d.code1},demo2:{title:"选项卡样式",notes:"选项卡样式的标签页。",code:d.code2},demo3:{title:"卡片化",notes:"卡片化的标签页。",code:d.code3},demo4:{title:"自定义标签页",notes:"可以通过具名 slot 来实现自定义标签页的内容",code:d.code4},demo5:{title:"自定义增加标签页触发器",code:d.code5},activeName1:"second",activeName2:"first",editableTabsValue:"2",editableTabs:[{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}],tabIndex:2,tabPosition:"top",lanble:"item.content"}},methods:{handleClick:function(e){console.log(e)},addTab:function(){var e=++this.tabIndex+"";this.editableTabs.push({title:"New Tab",name:e,content:"New Tab content"}),this.editableTabsValue=e},removeTab:function(e){console.log(e);var t=this.editableTabs,a=this.editableTabsValue;a===e&&t.forEach((function(n,l){if(n.name===e){var s=t[l+1]||t[l-1];s&&(a=s.name)}})),this.editableTabsValue=a,this.editableTabs=t.filter((function(t){return t.name!==e}))}}},m=p,u=(a("a16c"),a("2877")),v=Object(u["a"])(m,n,l,!1,null,null,null);t["default"]=v.exports},9982:function(e,t,a){},a16c:function(e,t,a){"use strict";var n=a("9982"),l=a.n(n);l.a}}]);
//# sourceMappingURL=chunk-a5153f68.1cd38e38.js.map