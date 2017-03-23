/**
 * Created by jiangyukun on 2017/3/20.
 */
import 'babel-polyfill'
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

let sagaMiddleware = createSagaMiddleware()
let store = createStore(allReducers, {}, compose(applyMiddleware(sagaMiddleware), DevTools.instrument()))
sagaMiddleware.run(rootSaga)

render(<Root store={store}/>, document.querySelector('#root'))

window.onerror = err => {
  console.log(err)
}
