/*
 * @Author: xry
 * @Description:
 * @Date: 2020-09-03 19:29:38
 * @LastEditTime: 2020-10-21 09:58:40
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/src/package/components/message/message.js
 */

/// <reference path="./message.d.ts" />

import Vue from "vue";
import Main from "./Message.vue";
let MessageConstructor = Vue.extend(Main); // 创建构造器

let instance;
let instances = [];
let seed = 1;
const Msg = function (options) {
  options = options || {};
  if (typeof options === "string") {
    options = {
      message: options
    };
  }
  let id = "msg_" + seed++;

  let userOnClose = options.onClose;
  options.onClose = function () {
    Msg.close(id, userOnClose);
  };

  let offset = options.offset || 20;
  instances.forEach(item => {
    offset += item.$el.offsetHeight + 16;
  });
  options.offset = offset;

  instance = new MessageConstructor(); // 使用构造器创建实例
  Object.entries(options).forEach(([key, val]) => {
    instance[key] = val;
  })
  instance.id = id;
  instance.$mount(); // 实例挂载
  document.body.appendChild(instance.$el);

  instances.push(instance);
  return instance;
};

Msg.close = function (id, userOnClose) {
  let ilen = instances.length;
  let index = -1;
  for (let i = 0; i < ilen; i++) {
    if (id === instances[i].id) {
      index = i;
      if (typeof userOnClose === "function") {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);
      break;
    }
  }

  if (index === -1 || ilen <= 1 || index > instances.length - 1) {
    return;
  }
  const closeDomHeight = instances[index].$el.offsetHeight;
  for (let i = index; i < ilen - 1; i++) {
    let dom = instances[i].$el;
    dom.style.top = parseInt(dom.style.top, 10) - closeDomHeight - 16 + "px";
  }
};

export default Msg;
