/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'

class AntiVirusMedicine extends React.Component {

  render() {
    return (
      <Item>
        <IconNav iconClassName="liver-icon-1"/>
        <ItemContent>
          <header>抗病毒药物使用情况</header>
          <div className="content-item">
            <div className="flex">
              <div className="flex1">
                <span>药品名称： 替比夫定</span>
              </div>
              <div className="flex1">
                <span>每日剂量： 600mg</span>
              </div>
            </div>
            <div className="mt-7">
              用药时间： 2016-07-UK ~ 至今
            </div>
          </div>

          <div className="content-item">
            <div className="flex mt-7">
              <div className="flex1">
                <span>药品名称： 替比夫定</span>
              </div>
              <div className="flex1">
                <span>每日剂量： 600mg</span>
              </div>
            </div>
            <div className="mt-7">
              <span>用药时间： 2016-07-UK ~ 2017-02-10</span>
            </div>
          </div>
        </ItemContent>
      </Item>
    )
  }
}

export default AntiVirusMedicine
