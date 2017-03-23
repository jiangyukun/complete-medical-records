/**
 * Created by jiangyukun on 2017/3/21.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'
import VerticalLine from '../../../component/VerticalLine'

class Liver_B_Ultrasonic extends React.Component {
  render() {
    const {liverBUltrasonic}  = this.props

    return (
      <Item className="analysis-result-item" verticalLine={false}>
        <div className="analysis-result-item-wrap">
          <VerticalLine bottom="3.5rem"/>
          <div className="small-circle-container">
            <div className="small-circle"></div>
          </div>
          <IconNav iconClassName="analysis-result-2"/>
          <ItemContent>
            <header>肝脏B超</header>
            {
              liverBUltrasonic.map((item, index) => {
                return (
                  <div key={index} className="content-item">
                    <header className="flex">
                      <div className="flex1">{item['pregnancy_States']}</div>
                      <div className="flex1">{item['clinical_Abnormalities']}</div>
                    </header>
                    <div>检查日期：{item['check_Liver_B_Date']}</div>
                  </div>
                )
              })
            }
          </ItemContent>
        </div>
      </Item>
    )
  }
}

export default Liver_B_Ultrasonic
