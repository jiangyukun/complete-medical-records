/**
 * Created by jiangyukun on 2017/3/21.
 */
import React from 'react'

import HBV_DNA from './result/HBV_DNA'
import Liver_B_Ultrasonic from './result/Liver_B_Ultrasonic'
import Part2 from './result/Part2'
import Part3 from './result/Part3'
import ForReferenceOnly from '../ForReferenceOnly'

import '../css/analysis-result.scss'

class AnalysisResult extends React.Component {
  render() {
    return (
      <div className="content-wrap analysis-result-page">
        <HBV_DNA/>
        <div className="result-part-2">
          <Part2/>
        </div>
        <div className="result-part-2">
          <Part3/>
        </div>
        <Liver_B_Ultrasonic/>
        <ForReferenceOnly verticalLine={false} className="bg-white"/>
      </div>
    )
  }
}

export default AnalysisResult
