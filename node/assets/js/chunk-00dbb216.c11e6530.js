(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00dbb216"],{3539:function(t,e,n){},a492:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cardviewapp",attrs:{id:"cardviewapp"}},[n("h2",[t._v(t._s(t.title))]),n("p",[t._v(t._s(t.description))]),n("div",{staticClass:"suchas"},[n("examplebox",{attrs:{code:t.demo1.code,title:t.demo1.title,notes:t.demo1.notes},scopedSlots:t._u([{key:"sourse",fn:function(){return[n("r-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("卡片名称")]),n("r-btn",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v("操作按钮")])],1),t._l(4,(function(e){return n("div",{key:e,staticClass:"text item"},[t._v(" "+t._s("列表内容 "+e)+" ")])}))],2)]},proxy:!0},{key:"description",fn:function(){return[t._v(" Card 组件包括 "),n("code",[t._v("header")]),t._v(" 和 "),n("code",[t._v("body")]),t._v(" 部分， "),n("code",[t._v("header")]),t._v(" 部分需要有显式具名 slot 分发，同时也是可选的。 ")]},proxy:!0}])})],1),n("div",{staticClass:"suchas"},[n("examplebox",{attrs:{code:t.demo2.code,title:t.demo2.title,notes:t.demo2.notes},scopedSlots:t._u([{key:"sourse",fn:function(){return[n("r-card",{staticClass:"box-card"},t._l(4,(function(e){return n("div",{key:e,staticClass:"text item"},[t._v(" "+t._s("列表内容 "+e)+" ")])})),0)]},proxy:!0},{key:"description",fn:function(){},proxy:!0}])})],1),n("div",{staticClass:"suchas"},[n("examplebox",{attrs:{code:t.demo3.code,title:t.demo3.title,notes:t.demo3.notes},scopedSlots:t._u([{key:"sourse",fn:function(){return[n("r-row",t._l(2,(function(e,o){return n("r-col",{key:e,attrs:{span:8,offset:o>0?2:0}},[n("r-card",{attrs:{"body-style":{padding:"0px"}}},[n("img",{staticClass:"image",attrs:{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"}}),n("div",{staticStyle:{padding:"14px"}},[n("span",[t._v("好吃的汉堡")]),n("div",{staticClass:"bottom clearfix"},[n("time",{staticClass:"time"},[t._v(t._s(t.currentDate))]),n("r-btn",{staticClass:"button",attrs:{type:"text"}},[t._v("操作按钮")])],1)])])],1)})),1)]},proxy:!0},{key:"description",fn:function(){return[t._v(" 配置 "),n("code",[t._v("body-style")]),t._v(" 属性来自定义 "),n("code",[t._v("body")]),t._v(" 部分的 "),n("code",[t._v("style")]),t._v(" ，我们还使用了布局组件。 ")]},proxy:!0}])})],1),n("div",{staticClass:"suchas"},[n("examplebox",{attrs:{code:t.demo4.code,title:t.demo4.title,notes:t.demo4.notes},scopedSlots:t._u([{key:"sourse",fn:function(){return[n("r-row",{attrs:{gutter:12}},[n("r-col",{attrs:{span:8}},[n("r-card",{attrs:{shadow:"always"}},[t._v("总是显示")])],1),n("r-col",{attrs:{span:8}},[n("r-card",{attrs:{shadow:"hover"}},[t._v("鼠标悬浮时显示")])],1),n("r-col",{attrs:{span:8}},[n("r-card",{attrs:{shadow:"never"}},[t._v("从不显示")])],1)],1)]},proxy:!0},{key:"description",fn:function(){return[t._v(" 通过 "),n("code",[t._v("shadow")]),t._v(" 属性设置卡片阴影出现的时机： "),n("code",[t._v("always")]),t._v("、 "),n("code",[t._v("hover")]),t._v(" 或 "),n("code",[t._v("never")]),t._v(" 。 ")]},proxy:!0}])})],1)])},r=[],a=n("0d92"),s='<r-card class="box-card">\n  <div slot="header" class="clearfix">\n    <span>卡片名称</span>\n    <r-btn style="float: right; padding: 3px 0" type="text">操作按钮</r-btn>\n  </div>\n  <div v-for="o in 4" :key="o" class="text item">\n    \'列表内容 \' + o\n  </div>\n</r-card>\n\n<style>\n  .text {\n    font-size:   14px;\n  }\n\n  .item {\n    margin-bottom: 18px;\n  }\n\n  .clearfix:before,\n  .clearfix:after {\n    display: table;\n    content: "";\n  }\n\n  .clearfix:after {\n    clear: both\n  }\n\n  .box-card {\n    width: 480px;\n  }\n</style>\n          ',c='<r-card class="box-card">\n  <div v-for="o in 4" :key="o" class="text item">\n    \'列表内容 \' + o\n  </div>\n</r-card>\n\n<style>\n  .text {\n    font-size:   14px;\n  }\n\n  .item {\n    margin-bottom: 18px;\n  }\n\n  .box-card {\n    width: 480px;\n  }\n</style>',d='<r-row>\n  <r-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">\n    <r-card class="box-card">\n      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">\n      <div style="padding: 14px;">\n        <span>好吃的汉堡</span>\n        <div class="bottom clearfix">\n          <time class="time">{{ currentDate }}</time>\n          <el-button type="text" class="button">操作按钮</el-button>\n        </div>\n      </div>\n    </r-card>\n  </r-col>\n</r-row>\n\n<style>\n  .time {\n    font-size:   13px;\n    color:   #999;\n  }\n\n  .bottom {\n    margin-top:   13px;\n    line-height:   12px;\n  }\n\n  .button {\n    padding:   0;\n    float:   float;\n  }\n\n  .image {\n    width:   100%;\n    display:   block;\n  }\n\n  .clearfix:before,\n  .clearfix:after {\n    display: table;\n    content: "";\n  }\n\n  .clearfix:after {\n    clear: both\n  }\n</style>',i='<r-row :gutter="12">\n  <r-col :span="8">\n    <r-card shadow="always">\n      总是显示\n    </r-card>\n  </r-col>\n  <r-col :span="8">\n    <r-card shadow="hover">\n      鼠标悬浮时显示\n    </r-card>\n  </r-col>\n  <r-col :span="8">\n    <r-card shadow="never">\n      从不显示\n    </r-card>\n  </r-col>\n</r-row>',l={code1:s,code2:c,code3:d,code4:i},p={name:"cardviewapp",components:{Examplebox:a["a"]},data:function(){return{title:"Card 卡片",description:"将信息聚合在卡片容器中展示。",demo1:{title:"基础用法",notes:"包含标题，内容和操作。",code:l.code1},demo2:{title:"简单卡片",notes:"卡片可以只有内容区域。",code:l.code2},demo3:{title:"带图片",notes:"可配置定义更丰富的内容展示。",code:l.code3},demo4:{title:"卡片阴影",notes:"可对阴影的显示进行配置。",code:l.code4},currentDate:(new Date).toISOString(),text:"'列表内容 ' + o",timetext:"{{ currentDate }}"}}},v=p,x=(n("e752"),n("2877")),f=Object(x["a"])(v,o,r,!1,null,null,null);e["default"]=f.exports},e752:function(t,e,n){"use strict";var o=n("3539"),r=n.n(o);r.a}}]);
//# sourceMappingURL=chunk-00dbb216.c11e6530.js.map