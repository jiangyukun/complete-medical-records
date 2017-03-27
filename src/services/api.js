/**
 * Created by jiangyukun on 2017/3/22.
 */
import {_get} from './http'

export function fetchMotherBasicInfo(mobile) {
  return _get(`/archives/patient/completionBaseInfoDetail/${mobile}`)
}

export function fetchTreatSituation(mobile) {
  return _get(`/archives/patient/completionDrugUseDetail/${mobile}`)
}

export function fetchObstetricExamination(mobile) {
  return _get(`/archives/patient/completionObstetricsCheckDetail/${mobile}`)
}

export function fetchAnalysisResult(mobile) {
  return _get(`/archives/patient/completionAssayResultDetail/${mobile}`)
}

export function fetchBabyBasicInfo(babyId, mobile) {
  return _get(`/archives/patient/queryMyPatientcompletionBabyInfoDetail/${babyId}/${mobile}`)
}

export function fetchBabyCombinedImmunization(babyId, mobile) {
  return _get(`/archives/patient/queryMyPatientcompletionBabyImmuneDetail/${babyId}/${mobile}`)
}

export function fetchBabyLaboratoryResult(babyId, mobile) {
  return _get(`/archives/patient/queryMyPatientcompletionBabyAssayResultDetail/${babyId}/${mobile}`)
}

/*
 * "161118041500578966"
 1
 :
 "161118041500578999"
 */
