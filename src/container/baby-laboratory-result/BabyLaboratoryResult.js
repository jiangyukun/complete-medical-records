/**
 * 基本信息
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'
import {connect} from 'react-redux'

import Baby_HBV_DNA from './result/Baby_HBV_DNA'
import LaboratoryResultPart2 from './result/LaboratoryResultPart2'
import ForReferenceOnly from '../ForReferenceOnly'
import {fetchBabyLaboratoryResult} from './baby-laboratory-result'

class BabyLaboratoryResult extends React.Component {

  componentDidMount() {
    this.props.fetchBabyLaboratoryResult()
  }

  render() {

    const hbvDnaList = this.props.babyLaboratoryResult['baby_HBV_List']
    const part2List = this.props.babyLaboratoryResult['baby_Hepatitis_B_Five_List']

    return (
      <div className="content-wrap baby-laboratory-result-page">
        <Baby_HBV_DNA hbvDnaList={hbvDnaList}/>
        <div className="result-part-2">
          <LaboratoryResultPart2 part2List={part2List}/>
        </div>
        <ForReferenceOnly verticalLine={false} className="bg-white"/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    babyLaboratoryResult: state['babyLaboratoryResult']
  }
}

export default connect(mapStateToProps, {
  fetchBabyLaboratoryResult
})(BabyLaboratoryResult)
