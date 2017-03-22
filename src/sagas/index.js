/**
 * Created by jiangyukun on 2017/3/22.
 */
import {fork, call, take, put, select} from 'redux-saga/effects'
import {mother} from '../constants/action-type'
import phase from '../constants/phase'
import * as api from '../services/api'

function* fetchBasicInfo() {
  yield take(mother.FETCH_BASIC_INFO)
  try {
    let result = yield call(api.fetchMotherBasicInfo)
    yield put({type: mother.FETCH_BASIC_INFO + phase.SUCCESS, result})
  } catch (err) {
    yield put({type: mother.FETCH_BASIC_INFO + phase.FAILURE, err})
  }
}

function* fetchTreatSituation() {
  yield take(mother.FETCH_TREAT_SITUATION)
  try {
    let result = yield call(api.fetchTreatSituation)
    yield put({type: mother.FETCH_TREAT_SITUATION + phase.SUCCESS, result})
  } catch (err) {
    yield put({type: mother.FETCH_TREAT_SITUATION + phase.FAILURE, err})
  }
}

function* fetchObstetricExamination() {
  yield take(mother.FETCH_OBSTETRIC_EXAMINATION)
  try {
    let result = yield call(api.fetchObstetricExamination)
    yield put({type: mother.FETCH_OBSTETRIC_EXAMINATION + phase.SUCCESS, result})
  } catch (err) {
    yield put({type: mother.FETCH_OBSTETRIC_EXAMINATION + phase.FAILURE, err})
  }
}

function* fetchAnalysisResult() {
  yield take(mother.FETCH_ANALYSIS_RESULT)
  try {
    let result = yield call(api.fetchAnalysisResult)
    yield put({type: mother.FETCH_ANALYSIS_RESULT + phase.SUCCESS, result})
  } catch (err) {
    yield put({type: mother.FETCH_ANALYSIS_RESULT + phase.FAILURE, err})
  }
}

export default function* root() {
  yield [
    fork(fetchBasicInfo),
    fork(fetchTreatSituation),
    fork(fetchObstetricExamination),
    fork(fetchAnalysisResult)
  ]
}
