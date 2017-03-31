/**
 * Created by jiangyukun on 2017/3/23.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'
import {check, getText} from '../../../helper/utils'

class SecondDose extends React.Component {
  render() {
    const secondDose = this.props.secondDose || {}

    return (
      <Item className="item-padding">
        <IconNav iconClassName="second-dose-icon"/>
        <ItemContent>
          <header>第二针</header>
          {
            check.yes(secondDose['inoculated_HBV_Vaccine']) && (
              <div className="content-item">
                <div>
                  乙肝疫苗接种时间：{getText(secondDose['inoculated_HBV_Day'])}
                </div>
                <div className="flex mt-7">
                  <div className="flex1">
                    <span>接种剂量：{getText(secondDose['inoculated_HBV_Dose'])}</span>
                  </div>
                  <div className="flex1">
                    <span>接种部位：{getText(secondDose['inoculated_HBV_Place'])}</span>
                  </div>
                </div>
              </div>
            )
          }
          {
            check.no(secondDose['inoculated_HBV_Vaccine']) && (
              <div className="content-item">
                <div className="flex mt-7">
                  <div className="flex1">乙肝疫苗接种时间：</div>
                  <div className="flex1">未接种</div>
                </div>
                <div className="mt-7">未接种原因：{getText(secondDose['not_Inoculated_HBV_Reason'])}</div>
              </div>
            )
          }
          {
            check.empty(secondDose['inoculated_HBV_Vaccine']) && (
              <div className="content-item">
                无第二针乙肝疫苗接种记录
              </div>
            )
          }
        </ItemContent>
      </Item>
    )
  }
}

export default SecondDose
