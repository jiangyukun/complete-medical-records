/**
 * 产科检查
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

import Visit1 from './visit/Visit1'
import Visit2 from './visit/Visit2'
import Visit3 from './visit/Visit3'
import ForReferenceOnly from '../ForReferenceOnly'
import '../css/obstetric-examination.scss'

class ObstetricExamination extends React.Component {

  render() {
    return (
      <div className="content-wrap">
        <Visit1/>
        <Visit2/>
        <Visit3/>
        <ForReferenceOnly/>
      </div>
    )
  }
}

export default ObstetricExamination
