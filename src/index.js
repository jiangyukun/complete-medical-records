/**
 * Created by jiangyukun on 2017/3/20.
 */
import 'babel-polyfill'
import 'isomorphic-fetch'
import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'

import './common.scss'
import './css/components/modal.scss'
import './css/components/table-list.scss'
import './css/app.scss'
import './css/mother/mother.scss'
import './css/baby/baby.scss'

import Root from './container/Root'
import DevTools from './container/devtools/DevTools'
import rootSaga from './sagas/'
import allReducers from './reducer/'
import * as utils from './helper/utils'
import {dpr} from './constants/constants'

let sagaMiddleware = createSagaMiddleware()
let store = createStore(allReducers, {}, compose(applyMiddleware(sagaMiddleware), DevTools.instrument()))
sagaMiddleware.run(rootSaga)

let isMotherMatched = /\/mother/.test(location.href)

const urlParams = utils.urlParams(location.href)
const {token, mobile, babyId} = urlParams
if (!token) {
  alert('无token参数')
}
if (!mobile) {
  alert('无mobile参数')
}
if (!isMotherMatched && !babyId) {
  alert('无babyId参数')
}

store.dispatch({
  type: 'PAGE_INIT', isMotherMatched, token, mobile, babyId
})

const html = document.getElementsByTagName('html')[0]
html.setAttribute('data-dpr', dpr)

const viewport = document.createElement('meta')
const pageScale = 1 / dpr
viewport.name = 'viewport'
viewport.content = `width=device-width, initial-scale=${pageScale}, maximum-scale=${pageScale}, user-scalable=no`
document.getElementsByTagName('head')[0].appendChild(viewport)

render((
  <Root store={store} isMotherMatched={isMotherMatched}/>
), document.querySelector('#root'))

/*window.onerror = err => {
 console.log(err)
 }*/
