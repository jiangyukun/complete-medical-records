/**
 * Created by jiangyukun on 2017/3/23.
 */
import React from 'react'
import classnames from 'classnames'

import BabyBasicInfo from './baby-basic-info/BabyBasicInfo'
import BabyCombinedImmunization from './baby-combined-immunization/BabyCombinedImmunization'
import BabyLaboratoryResult from './baby-laboratory-result/BabyLaboratoryResult'
import {babyPageStart} from '../constants/constants'

class BabyPage extends React.Component {
  state = {
    current: babyPageStart
  }

  render() {
    return (
      <div className="baby">
        {
          this.state.current == 1 && (
            <BabyBasicInfo/>
          )
        }
        {
          this.state.current == 2 && (
            <BabyCombinedImmunization/>
          )
        }
        {
          this.state.current == 3 && (
            <BabyLaboratoryResult/>
          )
        }
        <footer className="footer-nav">
          <div className={classnames('nav-item', {'active': this.state.current == 1})} onClick={() => this.setState({current: 1})}>
            基本信息
          </div>
          <div className={classnames('nav-item', {'active': this.state.current == 2})} onClick={() => this.setState({current: 2})}>
            联合免疫情况
          </div>
          <div className={classnames('nav-item', {'active': this.state.current == 3})} onClick={() => this.setState({current: 3})}>
            化验结果
          </div>
        </footer>
      </div>
    )
  }
}

export default BabyPage
