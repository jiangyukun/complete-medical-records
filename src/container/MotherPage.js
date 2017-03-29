/**
 * Created by jiangyukun on 2017/3/23.
 */
import React from 'react'
import classnames from 'classnames'

import BasicInfo from './mother-basic-info/BasicInfo'
import ObstetricExamination from './mother-obstetric-examination/ObstetricExamination'
import TreatSituation from './mother-treat-situation/TreatSituation'
import AnalysisResult from './mother-analysis-result/AnalysisResult'
import {motherPageStart} from '../constants/constants'

class MotherPage extends React.Component {
  state = {
    current: motherPageStart
  }

  render() {
    return (
      <div className="mother">
        {
          this.state.current == 1 && (
            <BasicInfo/>
          )
        }
        {
          this.state.current == 2 && (
            <TreatSituation/>
          )
        }
        {
          this.state.current == 3 && (
            <ObstetricExamination/>
          )
        }
        {
          this.state.current == 4 && (
            <AnalysisResult/>
          )
        }
        <footer className="footer-nav">
          <div className={classnames('nav-item', {'active': this.state.current == 1})} onClick={() => this.setState({current: 1})}>
            基本信息
          </div>
          <div className={classnames('nav-item', {'active': this.state.current == 2})} onClick={() => this.setState({current: 2})}>
            治疗情况
          </div>
          <div className={classnames('nav-item', {'active': this.state.current == 3})} onClick={() => this.setState({current: 3})}>
            产科检查
          </div>
          <div className={classnames('nav-item', {'active': this.state.current == 4})} onClick={() => this.setState({current: 4})}>
            化验结果
          </div>
        </footer>
      </div>
    )
  }
}

export default MotherPage
