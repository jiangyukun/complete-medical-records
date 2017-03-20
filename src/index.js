/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import saga from 'redux-saga'

import Root from './container/Root'

import allReducers from './reducer/'

import './common.scss'

let store = createStore(allReducers, {}, applyMiddleware(saga))

render(<Root store={store}/>, document.querySelector('#root'))
