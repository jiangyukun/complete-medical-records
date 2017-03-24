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

export function fetchBabyBasicInfo() {
  return _get('/archives/patient/queryMyPatientcompletionBabyInfoDetail/161118041500578966/12345678911')
}

export function fetchBabyCombinedImmunization() {
  return _get('/archives/patient/queryMyPatientcompletionBabyImmuneDetail/161118041500578966/12345678911')
}

export function fetchBabyLaboratoryResult() {
  return _get('/archives/patient/queryMyPatientcompletionBabyAssayResultDetail/161118041500578966/12345678911')
}

/*
 * "161118041500578966"
 1
 :
 "161118041500578999"
 */
