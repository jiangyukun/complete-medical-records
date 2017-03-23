/**
 * Created by jiangyukun on 2017/3/23.
 */
import React from 'react'
import classnames from 'classnames'

import BabyBasicInfo from './baby-basic-info/BabyBasicInfo'
import BabyCombinedImmunization from './baby-combined-immunization/BabyCombinedImmunization'

class BabyPage extends React.Component {
  state = {
    current: 1
  }

  render() {
    return (
      <div className="baby">
        <div className={classnames('page-container', {'hidden': this.state.current != 1})}>
          <BabyBasicInfo/>
        </div>
        <div className={classnames('page-container', {'hidden': this.state.current != 2})}>
          <BabyCombinedImmunization/>
        </div>
        <div className={classnames('page-container', {'hidden': this.state.current != 3})}>
        </div>
        <footer className="footer-nav">
          <div className={classnames('basic-info', {'active': this.state.current == 1})} onClick={() => this.setState({current: 1})}>
            基本信息
          </div>
          <div className={classnames('combined-immunization', {'active': this.state.current == 2})} onClick={() => this.setState({current: 2})}>
            联合免疫情况
          </div>
          <div className={classnames('analysis-result', {'active': this.state.current == 3})} onClick={() => this.setState({current: 3})}>
            化验结果
          </div>
        </footer>
      </div>
    )
  }
}

export default BabyPage
