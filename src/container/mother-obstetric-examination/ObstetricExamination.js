/**
 * 产科检查
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'
import {connect} from 'react-redux'

import Visit1 from './visit/Visit1'
import Visit2 from './visit/Visit2'
import Visit3 from './visit/Visit3'
import ForReferenceOnly from '../ForReferenceOnly'
import {fetchObstetricExamination} from './obstetric-examination'

class ObstetricExamination extends React.Component {
  componentDidMount() {
    this.props.fetchObstetricExamination()
  }

  render() {
    const visit1 = this.props.obstetricExamination['visitOneVo'] || {}
    const visit2 = this.props.obstetricExamination['visitTwoVo'] || {}
    const visit3 = this.props.obstetricExamination['visitThereVo'] || {}
    return (
      <div className="content-wrap">
        <Visit1 visit1={visit1}/>
        <Visit2 visit2={visit2}/>
        <Visit3 visit3={visit3}/>
        <ForReferenceOnly/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    obstetricExamination: state['obstetricExamination']
  }
}

export default connect(mapStateToProps, {
  fetchObstetricExamination
})(ObstetricExamination)
