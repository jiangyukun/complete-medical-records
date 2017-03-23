/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'

class NewBabyProfile extends React.Component {
  render() {
    return (
      <Item>
        <IconNav iconClassName="profile-basic-icon"/>
        <ItemContent>
          <header>新生儿情况</header>
          <div className="content-item">
            <div className="flex mt-7">
              <div className="flex1">
                <span>体重：2000g： </span>
              </div>
              <div className="flex1">
                <span>身高： 50.0 cm</span>
              </div>
            </div>
            <div className="flex mt-7">
              <div className="flex1">
                <span>头围：18 cm</span>
              </div>
              <div className="flex1">
                <span>Apgar评分：10</span>
              </div>
            </div>
            <div className="mt-7">
              出生缺陷： 未知/无/出生缺陷内容
            </div>
          </div>
        </ItemContent>
      </Item>
    )
  }
}

NewBabyProfile.propTypes = {}

export default NewBabyProfile
