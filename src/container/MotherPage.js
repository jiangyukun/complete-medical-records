/**
 * Created by jiangyukun on 2017/3/23.
 */
import React from 'react'
import classnames from 'classnames'

import BasicInfo from './mother-basic-info/BasicInfo'
import ObstetricExamination from './mother-obstetric-examination/ObstetricExamination'
import TreatSituation from './mother-treat-situation/TreatSituation'
import AnalysisResult from './mother-analysis-result/AnalysisResult'

class MotherPage extends React.Component {
  state = {
    current: 4
  }

  render() {
    return (
      <div className="mother">
        <div className={classnames('page-container', {'hidden': this.state.current != 1})}>
          <BasicInfo/>
        </div>
        <div className={classnames('page-container', {'hidden': this.state.current != 2})}>
          <TreatSituation/>
        </div>
        <div className={classnames('page-container', {'hidden': this.state.current != 3})}>
          <ObstetricExamination/>
        </div>
        <div className={classnames('page-container', {'hidden': this.state.current != 4})}>
          <AnalysisResult/>
        </div>
        <footer className="footer-nav">
          <div className={classnames('basic-info', {'active': this.state.current == 1})} onClick={() => this.setState({current: 1})}>
            基本信息
          </div>
          <div className={classnames('treat-situation', {'active': this.state.current == 2})} onClick={() => this.setState({current: 2})}>
            治疗情况
          </div>
          <div className={classnames('obstetric-check', {'active': this.state.current == 3})} onClick={() => this.setState({current: 3})}>
            产科检查
          </div>
          <div className={classnames('analysis-result', {'active': this.state.current == 4})} onClick={() => this.setState({current: 4})}>
            化验结果
          </div>
        </footer>
      </div>
    )
  }
}

export default MotherPage
