/*
 * @Author: Hang
 * @Date: 2020-07-15 10:40:44
 * @LastEditors: Hang
 * @LastEditTime: 2020-07-17 14:27:11
 * @FilePath: /ln-project/Users/zhengmukang/Desktop/hf-ui/utils/dom.js
 * @Description: 暂无描述
 */
const SPECIAL_CHARS_REGEXP = /([:\-_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;
const ieVersion = Number(document.documentMode);

/**
 * @description: 针对dom特殊处理的camelCase
 * @param {String} name
 * @return:
 */
const camelCase = function(name) {
  return name
    .replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
      return offset ? letter.toUpperCase() : letter;
    })
    .replace(MOZ_HACK_REGEXP, 'Moz$1');
};

/**
 * @description: 获取最终样式
 * @param {HTMLElement} element
 * @param {String} styleName
 * @return {String}
 */
// 获取最终样式
export const getStyle =
  ieVersion < 9
    ? function(element, styleName) {
        if (!element || !styleName) return null;
        styleName = camelCase(styleName);
        if (styleName === 'float') {
          styleName = 'styleFloat';
        }
        try {
          switch (styleName) {
            case 'opacity':
              try {
                return element.filters.item('alpha').opacity / 100;
              } catch (e) {
                return 1.0;
              }
            default:
              return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null;
          }
        } catch (e) {
          return element.style[styleName];
        }
      }
    : function(element, styleName) {
        if (!element || !styleName) return null;
        styleName = camelCase(styleName);
        if (styleName === 'float') {
          styleName = 'cssFloat';
        }
        try {
          var computed = document.defaultView.getComputedStyle(element, '');
          return element.style[styleName] || computed ? computed[styleName] : null;
        } catch (e) {
          return element.style[styleName];
        }
      };

/**
 * @description: 观察dom元素
 * @param {HTMLElement} el 需要观察的dom元素
 * @param {Function} fn dom元素变化时，执行的回调
 * @return {Object} MutationObserver,主要用于断开观察
 */
export const observeEl = (el, fn) => {
  if (!(el instanceof HTMLElement)) {
    console.error('el不是一个HTML元素');
    return;
  }
  // el:需要观察变动的节点

  // 观察器的配置（需要观察什么变动）
  const config = { attributes: true, childList: true, subtree: true, attributeFilter: ['css', 'style'] };

  // 当观察到变动时执行的回调函数
  const callback = (mutationsList, observer) => {
    if (typeof fn === 'function') fn();
  };

  // 创建一个观察器实例并传入回调函数
  const observer = new MutationObserver(callback);

  // 以上述配置开始观察目标节点
  observer.observe(el, config);

  return observer;

  // 之后，可停止观察
  // observer.disconnect();
};
