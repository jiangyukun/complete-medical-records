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
