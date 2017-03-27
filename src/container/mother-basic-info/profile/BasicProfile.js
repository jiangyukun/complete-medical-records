/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

import {getText} from '../../../helper/utils'

class BasicProfile extends React.Component {

  render() {
    const motherBasicInfo = this.props.motherBasicInfo
    const baseInfo = motherBasicInfo['baseInfo'] || {}
    return (
      <section className="profile-basic">
        <div className="profile-icon">
          <i className="profile-icon-1"></i>
          <div className="vertical-line"></div>
        </div>
        <div className="profile-item-description">
          <header>一般情况和生命体征</header>
          <div className="profile-items">
            <div className="flex">
              <div className="flex1">
                <span>姓名：{getText(baseInfo['real_Name'])}</span>
              </div>
              <div className="flex1">
                <span className="profile-item-monitory">民族：{getText(baseInfo['nation'])}</span>
              </div>
            </div>
            <div className="mt-7">
              <span>出生日期：{getText(baseInfo['birth_Date'])}</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

BasicProfile.propTypes = {
  motherBasicInfo: React.PropTypes.object
}

export default BasicProfile
