/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'
import {getText, getStartEndDate} from '../../../helper/utils'

class LiverProtectionMedicine extends React.Component {
  render() {
    const liverProtectionMedicine = this.props.liverProtectionMedicine || []
    const isEmpty = !liverProtectionMedicine || liverProtectionMedicine.length == 0

    return (
      <Item className="item-padding">
        <IconNav iconClassName="liver-icon-2"/>
        <ItemContent>
          <header>保肝药物使用情况</header>
          {
            isEmpty && (
              <div className="content-item">
                无保肝药物使用情况
              </div>
            )
          }
          {
            !isEmpty && liverProtectionMedicine.map((liverProtection, index) => {
              return (
                <div key={index} className="content-item">
                  <div>药品名称： {getText(liverProtection['drug_Common_Name'])}</div>
                  <div className="flex">
                    <div className="flex1">
                      <span>给药途径： {getText(liverProtection['provided_Drug_Way'])}</span>
                    </div>
                    <div className="flex1">
                      <span>每日剂量： {getText(liverProtection['total_Daily_Dose'])}</span>
                    </div>
                  </div>
                  <div className="mt-7">
                    用药时间： {getStartEndDate(liverProtection['start_Time'], liverProtection['end_Time'])}
                  </div>
                </div>
              )
            })
          }
        </ItemContent>
      </Item>
    )
  }
}

LiverProtectionMedicine.propTypes = {
  liverProtectionMedicine: React.PropTypes.array
}

export default LiverProtectionMedicine
