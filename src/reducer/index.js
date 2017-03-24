/**
 * Created by jiangyukun on 2017/3/20.
 */
import {combineReducers} from 'redux'
import {fromJS} from 'immutable'

import motherBasicInfo from '../container/mother-basic-info/basic_info'
import treatSituation from '../container/mother-treat-situation/treat_situation'
import obstetricExamination from '../container/mother-obstetric-examination/obstetric_examination'
import analysisResult from '../container/mother-analysis-result/analysis_result'

import babyBasicInfo from '../container/baby-basic-info/baby_basic_info'
import babyCombinedImmunization from '../container/baby-combined-immunization/baby_combined_immunization'
import babyLaboratoryResult from '../container/baby-laboratory-result/baby_laboratory_result'

function app(state = {isMotherMatched: true}, action) {
  const iState = fromJS(state)
  let nextIState = iState
  switch (action.type) {
    case 'PAGE_TYPE_CHECKED':
      nextIState = iState.set('isMotherMatched', action.isMotherMatched)
      break
  }
  if (nextIState === iState) return iState
  return nextIState.toJS()
}

export default combineReducers({
  app,
  motherBasicInfo,
  treatSituation,
  obstetricExamination,
  analysisResult,
  babyBasicInfo,
  babyCombinedImmunization,
  babyLaboratoryResult
})
