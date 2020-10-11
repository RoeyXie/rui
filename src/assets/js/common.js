/*
 * @Author: xry
 * @Description:
 * @Date: 2020-07-01 11:35:32
 * @LastEditTime: 2020-09-25 12:37:01
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/src/assets/js/common.js
 */
export function deepCopy(obj, cache = []) {
  // typeof [] => 'object'
  // typeof {} => 'object'
  if (obj === null || typeof obj !== 'object') {
    return obj
  }
  // 如果传入的对象与缓存的相等, 则递归结束, 这样防止循环
  /**
   * 类似下面这种
   * var a = {b:1}
   * a.c = a
   * 资料: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value
   */
  const hit = cache.filter(c => c.original === obj)[0]
  if (hit) {
    return hit.copy
  }

  const copy = Array.isArray(obj) ? [] : {}
  // 将copy首先放入cache, 因为我们需要在递归deepCopy的时候引用它
  cache.push({
    original: obj,
    copy
  })
  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache)
  })

  return copy
}

export const getType = obj => Object.prototype.toString.call(obj).slice(1, -1).split(" ")[1].toLowerCase()

export const getPx = num => (getType(num) === 'number' ? `${num}px` : num);

