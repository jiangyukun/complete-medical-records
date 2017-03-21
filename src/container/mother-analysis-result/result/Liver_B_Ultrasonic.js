/**
 * Created by jiangyukun on 2017/3/21.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'
import VerticalLine from '../../../component/VerticalLine'

class Liver_B_Ultrasonic extends React.Component {
  render() {
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
            <div className="content-item">
              <header className="flex">
                <div className="flex1">孕28周</div>
                <div className="flex1">无任何临床意义异常</div>
              </header>
              <div>检查日期：2017-02-20</div>
            </div>

            <div className="content-item">
              <header className="flex">
                <div className="flex1">孕14周</div>
                <div className="flex1">肝硬化</div>
              </header>
              <div>检查日期：2016-02-20</div>
            </div>
          </ItemContent>
        </div>
      </Item>
    )
  }
}

export default Liver_B_Ultrasonic
