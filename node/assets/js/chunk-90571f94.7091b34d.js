(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-90571f94"],{"555f":function(l,t,o){},"7c91":function(l,t,o){"use strict";o.r(t);var n=function(){var l=this,t=l.$createElement,o=l._self._c||t;return o("div",{staticClass:"scrollview"},[o("h2",[l._v(l._s(l.title))]),o("div",{staticClass:"suchas"},[o("examplebox",{attrs:{code:l.demo1.code,title:l.demo1.title,notes:l.demo1.notes},scopedSlots:l._u([{key:"sourse",fn:function(){return[o("div",{staticStyle:{height:"350px",overflow:"auto"}},[o("r-scroll",{attrs:{height:"100%",to:l.scrollTop,el:l.scrollEl},on:{scroll:l.onScroll,"scroll-end":l.scrollEnd}},[o("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return l.scrollTo(200)}}},[l._v("跳转到200px")]),o("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return l.scrollTo(".d-scroll-minddle")}}},[l._v("跳转到中部按钮")]),o("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return l.scrollTo(".d-scroll-bottom")}}},[l._v("跳转到底部按钮")]),l._l(7,(function(t){return o("div",{key:t,staticClass:"d-scroll-text"},[o("p",[l._v("这是")]),o("p",[l._v("很长的")]),o("p",[l._v("文字")]),o("p",[l._v("~")]),o("p",[l._v("~")]),o("p",[l._v("~")]),3===t?o("el-button",{staticClass:"d-scroll-minddle",attrs:{size:"small",type:"warning"},on:{click:function(t){return l.scrollTo(0)}}},[l._v("回到顶部（中部按钮）")]):l._e()],1)})),o("el-button",{staticClass:"d-scroll-bottom",attrs:{size:"small",type:"danger"},on:{click:function(t){return l.scrollTo(0)}}},[l._v("回到顶部（底部按钮）")])],2)],1)]},proxy:!0},{key:"description",fn:function(){},proxy:!0}])})],1)])},s=[],e=o("0d92"),r='<template>\n  <div style="height: 350px;">\n    <r-scroll\n      :height="100%"\n      :to="scrollTop"\n      :el="scrollEl"\n      @scroll="onScroll"\n      @scroll-end="scrollEnd"\n    >\n      <el-button @click="scrollTo(200)" size="small" type="primary">跳转到200px</el-button>\n      <el-button @click="scrollTo(\'.d-scroll-minddle\')" size="small" type="primary">跳转到中部按钮</el-button>\n      <el-button @click="scrollTo(\'.d-scroll-bottom\')" size="small" type="primary">跳转到底部按钮</el-button>\n      <div v-for="n of 7" :key="n" class="d-scroll-text">\n        <p>这是</p>\n        <p>很长的</p>\n        <p>文字</p>\n        <p>~</p>\n        <p>~</p>\n        <p>~</p>\n        <el-button\n          v-if="n === 3"\n          @click="scrollTo(0)"\n          class="d-scroll-minddle"\n          size="small"\n          type="warning"\n          >\n          回到顶部（中部按钮）\n        </el-button>\n      </div>\n      <el-button @click="scrollTo(0)" class="d-scroll-bottom" size="small" type="danger">\n        回到顶部（底部按钮）\n      </el-button>\n    </r-scroll>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      scrollTop: undefined,\n      scrollEl: ""\n    };\n  },\n  methods: {\n    scrollTo(target) {\n      if (typeof target === "number") {\n        this.scrollTop = target;\n      } else if (typeof target === "string") {\n        this.scrollEl = target;\n      }\n    },\n    onScroll(scrollTop) {\n      // console.log(scrollTop);\n    },\n    scrollEnd() {\n      // 使得可以重复触发滚动事件\n      this.scrollTop = undefined;\n      this.scrollEl = "";\n    }\n  }\n};\n<\/script>',c={code1:r},i={name:"scrollview",components:{Examplebox:e["a"]},data:function(){return{title:"Scroll 滚动",demo1:{title:"基础使用",notes:"在保证元素可以滚动的情况下（默认设置height:100%，通过height属性修改），通过输入 scrollTop 或一个元素的 selector ，或者调用 scrollTo(target)实现跳转",code:c.code1},scrollTop:void 0,scrollEl:""}},created:function(){},mounted:function(){},methods:{scrollTo:function(l){"number"===typeof l?this.scrollTop=l:"string"===typeof l&&(this.scrollEl=l)},onScroll:function(l){},scrollEnd:function(l){this.scrollTop=void 0,this.scrollEl=""}}},p=i,a=(o("ffcc"),o("2877")),d=Object(a["a"])(p,n,s,!1,null,null,null);t["default"]=d.exports},ffcc:function(l,t,o){"use strict";var n=o("555f"),s=o.n(n);s.a}}]);
//# sourceMappingURL=chunk-90571f94.7091b34d.js.map