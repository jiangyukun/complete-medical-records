/**
 * Created by jiangyukun on 2017/3/22.
 */
import {fork, call, take, put, select} from 'redux-saga/effects'
import {mother, baby} from '../constants/action-type'
import phase from '../constants/phase'
import * as api from '../services/api'
import mobileSelector from './mobileSelector'
import babyIdSelector from './babyIdSelector'

function* fetchBasicInfo() {
  yield take(mother.FETCH_BASIC_INFO)
  try {
    let result = yield call(api.fetchMotherBasicInfo, yield select(mobileSelector))
    yield put({type: mother.FETCH_BASIC_INFO + phase.SUCCESS, result})
  } catch (err) {
    yield put({type: mother.FETCH_BASIC_INFO + phase.FAILURE, err})
  }
}

function* fetchTreatSituation() {
  yield take(mother.FETCH_TREAT_SITUATION)
  try {
    let result = yield call(api.fetchTreatSituation, yield select(mobileSelector))
    yield put({type: mother.FETCH_TREAT_SITUATION + phase.SUCCESS, result})
  } catch (err) {
    yield put({type: mother.FETCH_TREAT_SITUATION + phase.FAILURE, err})
  }
}

function* fetchObstetricExamination() {
  yield take(mother.FETCH_OBSTETRIC_EXAMINATION)
  try {
    let result = yield call(api.fetchObstetricExamination, yield select(mobileSelector))
    yield put({type: mother.FETCH_OBSTETRIC_EXAMINATION + phase.SUCCESS, result})
  } catch (err) {
    yield put({type: mother.FETCH_OBSTETRIC_EXAMINATION + phase.FAILURE, err})
  }
}

function* fetchAnalysisResult() {
  yield take(mother.FETCH_ANALYSIS_RESULT)
  try {
    let result = yield call(api.fetchAnalysisResult, yield select(mobileSelector))
    yield put({type: mother.FETCH_ANALYSIS_RESULT + phase.SUCCESS, result})
  } catch (err) {
    yield put({type: mother.FETCH_ANALYSIS_RESULT + phase.FAILURE, err})
  }
}

function* fetchBabyBasicInfo() {
  yield take(baby.FETCH_BASIC_INFO)
  try {
    let result = yield call(api.fetchBabyBasicInfo, yield select(babyIdSelector), yield select(mobileSelector))
    yield put({type: baby.FETCH_BASIC_INFO + phase.SUCCESS, result})
  } catch (err) {
    yield put({type: baby.FETCH_BASIC_INFO + phase.FAILURE, err})
  }
}

function* fetchBabyCombinedImmunization() {
  yield take(baby.FETCH_BABY_COMBINED_IMMUNIZATION)
  try {
    let result = yield call(api.fetchBabyCombinedImmunization, yield select(babyIdSelector), yield select(mobileSelector))
    yield put({type: baby.FETCH_BABY_COMBINED_IMMUNIZATION + phase.SUCCESS, result})
  } catch (err) {
    yield put({type: baby.FETCH_BABY_COMBINED_IMMUNIZATION + phase.FAILURE, err})
  }
}

function* fetchBabyLaboratoryResult() {
  yield take(baby.FETCH_BABY_LABORATORY_RESULT)
  try {
    let result = yield call(api.fetchBabyLaboratoryResult, yield select(babyIdSelector), yield select(mobileSelector))
    yield put({type: baby.FETCH_BABY_LABORATORY_RESULT + phase.SUCCESS, result})
  } catch (err) {
    yield put({type: baby.FETCH_BABY_LABORATORY_RESULT + phase.FAILURE, err})
  }
}

export default function* root() {
  yield [
    fork(fetchBasicInfo),
    fork(fetchTreatSituation),
    fork(fetchObstetricExamination),
    fork(fetchAnalysisResult),
    fork(fetchBabyBasicInfo),
    fork(fetchBabyCombinedImmunization),
    fork(fetchBabyLaboratoryResult),
  ]
}
