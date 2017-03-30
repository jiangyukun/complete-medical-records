/**
 * Created by jiangyukun on 2017/3/23.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'
import {check, getText} from '../../../helper/utils'

class FirstDose extends React.Component {
  render() {
    const firstDose = this.props.firstDose || {}

    return (
      <Item className="item-padding">
        <IconNav iconClassName="first-dose-icon"/>
        <ItemContent>
          <header>第一针</header>
          {
            check.yes(firstDose['inoculated_HBV_Vaccine']) && (
              <div className="content-item">
                <div className="mt-7">
                  乙肝疫苗接种时间：{getText(firstDose['inoculated_HBIG_Day'])}
                </div>
                <div className="flex mt-7">
                  <div className="flex1">
                    <span>接种剂量：{getText(firstDose['inoculated_HBV_Dose'])}</span>
                  </div>
                  <div className="flex1">
                    <span>接种部位：{getText(firstDose['inoculated_HBV_Place'])}</span>
                  </div>
                </div>
              </div>
            )
          }
          {
            check.no(firstDose['inoculated_HBV_Vaccine']) && (
              <div className="content-item">
                <div className="flex mt-7">
                  <div className="flex1">乙肝疫苗接种时间：</div>
                  <div className="flex1">未接种</div>
                </div>
                <div className="flex mt-7">
                  <div className="flex1">
                    <span>未接种原因：</span>
                  </div>
                  <div className="flex1">
                    <span>不知道要接种</span>
                  </div>
                </div>
              </div>
            )
          }
          {
            check.empty(firstDose['inoculated_HBV_Vaccine']) && (
              <div className="content-item">无第一针乙肝疫苗接种记录</div>
            )
          }
          <div className="content-item">
            {
              check.yes(firstDose['inoculated_HBIG_Vaccine']) && (
                <div className="flex mt-7">
                  <div className="flex1">HBIG接种时间：</div>
                  <div className="flex1">{getText(firstDose['inoculated_HBIG_Day'])}</div>
                </div>
              )
            }
            {
              check.yes(firstDose['inoculated_HBIG_Vaccine']) && (
                <div className="flex mt-7">
                  <div className="flex1">
                    <span>接种剂量：{getText(firstDose['inoculated_HBIG_Dose'])}</span>
                  </div>
                  <div className="flex1">
                    <span>接种部位：{getText(firstDose['inoculated_HBIG_Place'])}</span>
                  </div>
                </div>
              )
            }
            {
              check.empty(firstDose['inoculated_HBIG_Vaccine']) && (
                <div className="mt-7">无第一针HBIG接种记录</div>
              )
            }
          </div>
        </ItemContent>
      </Item>
    )
  }
}

export default FirstDose
