/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

import {getText} from '../../../helper/utils'

class ProfileHepatitisB extends React.Component {

  render() {
    const motherBasicInfo = this.props.motherBasicInfo
    const baseInfo = motherBasicInfo['baseInfo'] || {}
    return (
      <section className="profile-hepatitis-b">
        <div className="vertical-line"></div>
        <div className="profile-icon">
          <i className="profile-icon-2"></i>
        </div>
        <div className="profile-item-description">
          <header>乙肝相关病史</header>
          <div className="profile-items">
            <span>乙肝确诊日期： {getText(baseInfo['hepatitis_B_Date'])}</span>
            <div className="mt-7">
              <span>亲属中乙肝病毒感染者：{getText(baseInfo['infected_Family_Members'])}</span>
            </div>
            <div className="mt-7">
              <span>合并感染情况：{getText(baseInfo['merge_Info'])}</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

ProfileHepatitisB.propTypes = {
  motherBasicInfo: React.PropTypes.object
}

export default ProfileHepatitisB
