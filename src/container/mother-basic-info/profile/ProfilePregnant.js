/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

import {getText} from '../../../helper/utils'

class ProfilePregnant extends React.Component {

  render() {
    const {motherBasicInfo} = this.props
    const baseInfo = motherBasicInfo['baseInfo'] || {}
    return (
      <section className="profile-pregnant">
        <div className="vertical-line"></div>
        <div className="profile-icon">
          <i className="profile-icon-3"></i>
        </div>
        <div className="profile-item-description">
          <header>孕产期</header>
          <div className="profile-items">
            <span>末次月经日期： {getText(baseInfo['last_Menstruation_Date'])}</span>
            <div className="mt-7">
              <span>预产期： {getText(baseInfo['expected_Time'])}</span>
            </div>
            <div className="flex mt-7">
              <div className="flex1">
                <span>生产次数： {getText(baseInfo['delivery_Number'])}</span>
              </div>
              <div className="flex1">
                <span className="profile-item-monitory">存活子女数：{getText(baseInfo['survival_Number'])}</span>
              </div>
            </div>
            <div className="mt-7">
              <span>是否有子女感染： {getText(baseInfo['is_Children_Infected'])}</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

ProfilePregnant.propTypes = {
  motherBasicInfo: React.PropTypes.object
}

export default ProfilePregnant
