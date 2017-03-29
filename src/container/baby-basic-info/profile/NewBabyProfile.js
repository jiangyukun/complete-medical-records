/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'
import {getText} from '../../../helper/utils'

class NewBabyProfile extends React.Component {
  render() {
    const {babyBasicInfo} = this.props

    return (
      <Item>
        <IconNav iconClassName="profile-basic-icon"/>
        <ItemContent>
          <header>新生儿情况</header>
          <div className="content-item">
            <div className="flex mt-7">
              <div className="flex1">
                <span>体重：{getText(babyBasicInfo['weight'])}</span>
              </div>
              <div className="flex1">
                <span>身高： {getText(babyBasicInfo['height'])}</span>
              </div>
            </div>
            <div className="flex mt-7">
              <div className="flex1">
                <span>头围：{getText(babyBasicInfo['head_Circumference'])}</span>
              </div>
              <div className="flex1">
                <span>Apgar评分：{getText(babyBasicInfo['apgar'])}</span>
              </div>
            </div>
            <div className="mt-7">
              出生缺陷： {getText(babyBasicInfo['physiological_Defect'])}
            </div>
          </div>
        </ItemContent>
      </Item>
    )
  }
}

NewBabyProfile.propTypes = {}

export default NewBabyProfile
