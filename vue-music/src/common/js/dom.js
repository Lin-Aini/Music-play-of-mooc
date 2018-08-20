// export function hasClass(el, className) {
//   let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
//   return reg.test(el.className)
// }

// export function addClass(el, className) {
//   if (hasClass(el, className)) {
//     return
//   }

//   let newClass = el.className.split(' ')
//   newClass.push(className)
//   el.className = newClass.join(' ')
// }

// export function getData(el, name, val) {
//   const prefix = 'data-'
//   if (val) {
//     return el.setAttribute(prefix + name, val)
//   }
//   return el.getAttribute(prefix + name)
// }

// let elementStyle = document.createElement('div').style

// let vendor = (() => {
//   let transformNames = {
//     webkit: 'webkitTransform',
//     Moz: 'MozTransform',
//     O: 'OTransform',
//     ms: 'msTransform',
//     standard: 'transform'
//   }

//   for (let key in transformNames) {
//     if (elementStyle[transformNames[key]] !== undefined) {
//       return key
//     }
//   }

//   return false
// })()

// export function prefixStyle(style) {
//   if (vendor === false) {
//     return false
//   }

//   if (vendor === 'standard') {
//     return style
//   }

//   return vendor + style.charAt(0).toUpperCase() + style.substr(1)
// }

export function addClass (el, className) {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ') // 在空格处拆分 为数组形式
  newClass.push(className)
  el.className = newClass.join(' ') // 以添加空格符方式 组合字符串, join() 方法用于把数组中的所有元素放入一个字符串
}

export function hasClass (el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)') // 验证 classname前加空白字符，classname后加空白字符也可以结束
  return reg.test(el.className)
}
