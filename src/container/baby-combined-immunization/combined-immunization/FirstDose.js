/**
 * Created by jiangyukun on 2017/3/23.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'

class FirstDose extends React.Component {
  render() {
    const {firstDose} = this.props

    return (
      <Item className="item-padding">
        <IconNav iconClassName="first-dose-icon"/>
        <ItemContent>
          <header>第一针</header>
          <div className="content-item">
            <div className="mt-7">
              乙肝疫苗接种时间：{firstDose['inoculated_HBIG_Day']}
            </div>
            <div className="flex mt-7">
              <div className="flex1">
                <span>接种剂量：{firstDose['inoculated_HBV_Dose']}</span>
              </div>
              <div className="flex1">
                <span>接种部位：{firstDose['inoculated_HBV_Place']}</span>
              </div>
            </div>
          </div>
          <div className="content-item">
            <div className="mt-7">
              HBIG接种时间：{firstDose['inoculated_HBIG_Day']}
            </div>
            <div className="flex mt-7">
              <div className="flex1">
                <span>接种剂量：{firstDose['inoculated_HBIG_Dose']}</span>
              </div>
              <div className="flex1">
                <span>接种部位：{firstDose['inoculated_HBIG_Place']}</span>
              </div>
            </div>
          </div>
        </ItemContent>
      </Item>
    )
  }
}

export default FirstDose
