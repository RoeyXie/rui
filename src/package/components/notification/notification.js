/*
 * @Author: xry
 * @Description:
 * @Date: 2020-09-04 19:42:11
 * @LastEditTime: 2020-10-21 10:23:10
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/src/package/components/notification/notification.js
 */
import Vue from 'vue'
import Notification from './Notification.vue'
let NtfctConstructor = Vue.extend(Notification)

let instance
let instances = []
let seed = 1

const Ntf = function (options) {
  let id = 'ntf_' + seed++
  const position = options.position || 'top-right'
  let userOnClose = options.onClose
  let offset = (options.offset || 0) + 20

  options.onClose = function () {
    Ntf.close(id, userOnClose)
  }

  instances
    .filter(item => item.position === position)
    .forEach(item => (offset += item.$el.offsetHeight + 16))
  options.offset = offset

  instance = new NtfctConstructor({
    data: options
  })
  instance.id = id
  instances.push(instance)
  instance.$mount() // 挂载
  document.body.appendChild(instance.$el)

  return instance
}
Ntf.close = function (id, userOnClose) {
  let ilen = instances.length
  let closePosition = instance.position
  let index = -1
  let closeDomHeight

  for (let i = 0; i < ilen; i++) {
    if (id === instances[i].id) {
      index = i
      closeDomHeight = instances[index].$el.offsetHeight
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i])
      }
      instances.splice(i, 1)
      break
    }
  }
  if (ilen <= 1 || index > instances.length - 1) return
  for (let i = index; i < ilen - 1; i++) {
    if (closePosition === instances[i].position) {
      let dom = instances[i].$el
      dom.style[instance.topOrbottom] =
        parseInt(dom.style[instance.topOrbottom], 10) -
        closeDomHeight -
        16 +
        'px'
    }
  }
}

export default Ntf
