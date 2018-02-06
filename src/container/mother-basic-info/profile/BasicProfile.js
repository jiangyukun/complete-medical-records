/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'
import {getText} from '../../../helper/utils'

class BasicProfile extends React.Component {

  render() {
    const motherBasicInfo = this.props.motherBasicInfo || {}
    const baseInfo = motherBasicInfo['baseInfo'] || {}
    return (
      <Item>
        <IconNav iconClassName="profile-icon-1"/>
        <ItemContent>
          <header>一般情况和生命体征</header>
          <div className="content-item">
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
            <div className="mt-7">
              <span>患者编号：{baseInfo['patient_Code'] || '尚未生成编号'}</span>
            </div>
          </div>
        </ItemContent>
      </Item>
    )
  }
}

BasicProfile.propTypes = {
  motherBasicInfo: React.PropTypes.object
}

export default BasicProfile
