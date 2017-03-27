/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

import {getText, isAllEmpty} from '../../../helper/utils'

class ProfileDeliver extends React.Component {

  render() {
    const motherBasicInfo = this.props.motherBasicInfo
    const baseInfo = motherBasicInfo['baseInfo'] || {}

    const allEmpty = isAllEmpty(baseInfo['delivery_Time'], baseInfo['delivery_Final'], baseInfo['delivery_Way'])
    return (
      <section className="profile-deliver">
        <div className="vertical-line"></div>
        <div className="profile-icon">
          <i className="profile-icon-4"></i>
        </div>
        <div className="profile-item-description">
          <header>分娩情况</header>
          {
            allEmpty && (
              <div className="profile-items">
                无分娩情况
              </div>
            )
          }
          {
            !allEmpty && (
              <div className="profile-items">
                <div>
                  <span>分娩时间： {getText(baseInfo['delivery_Time'])}</span>
                </div>
                <div className="mt-7">
                  <span>分娩结局： {getText(baseInfo['delivery_Final'])}</span>
                </div>
                <div className="mt-7">
                  <span>分娩方式： {getText(baseInfo['delivery_Way'])}</span>
                </div>
              </div>
            )
          }
        </div>
      </section>
    )
  }
}

ProfileDeliver.propTypes = {
  motherBasicInfo: React.PropTypes.object
}

export default ProfileDeliver
