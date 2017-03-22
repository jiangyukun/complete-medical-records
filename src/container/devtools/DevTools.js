/**
 * Created by jiangyukun on 2016/11/6.
 */
import React from 'react'
import {createDevTools} from 'redux-devtools'
import DockMonitor from 'redux-devtools-dock-monitor'
import LogMonitor from 'redux-devtools-log-monitor'

export default createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-x"
               changePositionKey="ctrl-z"

  >
    <LogMonitor/>
  </DockMonitor>
)
