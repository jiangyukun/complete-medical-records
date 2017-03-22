/**
 * Created by jiangyukun on 2017/3/22.
 */
import {_get} from './http'

export function fetchMotherBasicInfo() {
  return _get('/archives/patient/completionBaseInfoDetail/12345678911')
}

export function fetchTreatSituation() {
  return _get('/archives/patient/completionDrugUseDetail/12345678911')
}

export function fetchObstetricExamination() {
  return _get('/archives/patient/completionObstetricsCheckDetail/12345678911')
}

export function fetchAnalysisResult() {
  return _get('/archives/patient/completionAssayResultDetail/12345678911')
}
