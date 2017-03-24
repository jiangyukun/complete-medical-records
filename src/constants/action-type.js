/**
 * Created by jiangyukun on 2017/3/22.
 */


function getActionTypeFn(prefix) {
  return function (type) {
    return prefix + '__' + type
  }
}

function generatorKeyValue(prefix, obj) {
  let newObj = {}
  let typeFn = getActionTypeFn(prefix)
  for (let key in obj) {
    newObj[key] = typeFn(key)
  }
  return newObj
}

export const mother = generatorKeyValue('MOTHER', {
  FETCH_BASIC_INFO: null,
  FETCH_TREAT_SITUATION: null,
  FETCH_OBSTETRIC_EXAMINATION: null,
  FETCH_ANALYSIS_RESULT: null,
})


export const baby = generatorKeyValue('BABY', {
  FETCH_BASIC_INFO: null,
  FETCH_BABY_COMBINED_IMMUNIZATION: null,
  FETCH_BABY_LABORATORY_RESULT: null,
})
