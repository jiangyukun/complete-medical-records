/**
 * Created by jiangyukun on 2017/3/20.
 */
import {combineReducers} from 'redux'

import motherBasicInfo from '../container/mother-basic-info/basic_info'
import treatSituation from '../container/mother-treat-situation/treat_situation'
import obstetricExamination from '../container/mother-obstetric-examination/obstetric_examination'
import analysisResult from '../container/mother-analysis-result/analysis_result'

function app(state = {}, action) {
  return state
}

export default combineReducers({
  app,
  motherBasicInfo,
  treatSituation,
  obstetricExamination,
  analysisResult
})
