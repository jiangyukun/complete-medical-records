/**
 * Created by jiangyukun on 2017/3/22.
 */


/**
 * fetch请求 表单参数 body处理
 * @param paramObj
 * @returns {string}
 */
export function bodyParam(paramObj) {
  let paramUrl = ''
  let current = 0
  for (let param in paramObj) {
    if (paramObj.hasOwnProperty(param)) {
      if (paramObj[param]) {
        let prefix = ''
        if (current++ == 0) {
          prefix = ''
        } else {
          prefix = ','
        }
        paramUrl += prefix + param + '=' + paramObj[param]
      }
    }
  }
  return encodeURI(paramUrl)
}

/**
 * 将url地址转化为key value对象
 * @param url
 * @returns {{}}
 */
export function urlParams(url) {
  let result = {}
  if (!url) return result
  let paramUrl = url.substring(url.indexOf('?') + 1)
  if (!paramUrl) return result

  let parts = paramUrl.split('&')
  parts.forEach(part => {
    let keyAndValue = part.split('=')
    if (keyAndValue.length == 2) {
      result[keyAndValue[0]] = keyAndValue[1]
    }
  })

  return result
}

// 数据展示形式
export function getText(value) {
  if (value == undefined) {
    return '未知'
  }
  return value
}


export function isEmpty(item) {
  return !item || item == '未知'
}

export function isAllEmpty(...args) {
  let allEmpty = true
  args.forEach(item => {
    if (item && item != '未知') {
      allEmpty = false
    }
  })
  return allEmpty
}
