/**
 * Created by jiangyukun on 2017/3/21.
 */
import React from 'react'
import {connect} from 'react-redux'

import '../css/analysis-result.scss'
import HBV_DNA from './result/HBV_DNA'
import Liver_B_Ultrasonic from './result/Liver_B_Ultrasonic'
import Part2 from './result/Part2'
import Part3 from './result/Part3'
import ForReferenceOnly from '../ForReferenceOnly'
import {fetchAnalysisResult} from './analysis-result'

class AnalysisResult extends React.Component {
  componentDidMount() {
    this.props.fetchAnalysisResult()
  }

  render() {
    const hbvDnaList = this.props.analysisResult['hbv_Dna_List']
    const part2 = this.props.analysisResult['liver_Result_List']
    const part3 = this.props.analysisResult['check_five_List']
    return (
      <div className="content-wrap analysis-result-page">
        <HBV_DNA hbvDnaList={hbvDnaList}/>
        <div className="result-part-2">
          <Part2 part2={part2}/>
        </div>
        <div className="result-part-2">
          <Part3 part3={part3}/>
        </div>
        <Liver_B_Ultrasonic/>
        <ForReferenceOnly verticalLine={false} className="bg-white"/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log(state['analysisResult'])
  return {
    analysisResult: state['analysisResult']
  }
}

export default connect(mapStateToProps, {
  fetchAnalysisResult
})(AnalysisResult)
