/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'

class LiverProtectionMedicine extends React.Component {

  render() {
    return (
      <Item className="item-padding">
        <IconNav iconClassName="liver-icon-2"/>
        <ItemContent>
          <header>保肝药物使用情况</header>
          <div className="content-item">
            <div>药品名称： 双环醇片+还原型谷胱甘肽</div>
            <div className="flex mt-7">
              <div className="flex1">
                <span>给药途径： 口服</span>
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
            <div className="mt-7">药品名称： 双环醇片+还原型谷胱甘肽</div>
            <div className="flex mt-7">
              <div className="flex1">
                <span>给药途径： 口服</span>
              </div>
              <div className="flex1">
                <span>每日剂量： 未知</span>
              </div>
            </div>
            <div className="mt-7">
              用药时间： 2016-07-UK ~ 2017-02-10
            </div>
          </div>
        </ItemContent>
      </Item>
    )
  }
}

export default LiverProtectionMedicine
