/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'
import {getText, getStartEndDate} from '../../../helper/utils'

class AntiVirusMedicine extends React.Component {
  render() {
    const antiVirusMedicine = this.props.antiVirusMedicine || []
    const isEmpty = !antiVirusMedicine || antiVirusMedicine.length == 0

    return (
      <Item>
        <IconNav iconClassName="liver-icon-1"/>
        <ItemContent>
          <header>抗病毒药物使用情况</header>
          {
            isEmpty && (
              <div className="content-item">
                无抗病毒药物使用情况
              </div>
            )
          }
          {
            !isEmpty && antiVirusMedicine.map((antiVirus, index) => {
              return (
                <div key={index} className="content-item">
                  <div className="flex mt-7">
                    <div className="flex1">
                      <span>药品名称： {getText(antiVirus['drug_Common_Name'])}</span>
                    </div>
                    <div className="flex1">
                      <span>每日剂量： {getText(antiVirus['total_Daily_Dose'])}</span>
                    </div>
                  </div>
                  <div className="mt-7">
                    用药时间： {getStartEndDate(antiVirus['start_Time'], antiVirus['end_Time'])}
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

AntiVirusMedicine.propTypes = {
  antiVirusMedicine: React.PropTypes.array
}

export default AntiVirusMedicine
