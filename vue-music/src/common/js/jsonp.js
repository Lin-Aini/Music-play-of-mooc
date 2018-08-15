import originJsonp from 'jsonp'

export default function jsonp (url, data, option) {
  // http://www.xxx.com/Show.asp?id=77&nameid=2905210001&page=1
  // ？ 在url中起连接作用
  // &  是url中不同参数之间的间隔符
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

export function param (data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}
