/**
 * Created by jiangyukun on 2017/3/21.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'
import VerticalLine from '../../../component/VerticalLine'

class HBV_DNA extends React.Component {
  render() {
    return (
      <Item className="analysis-result-item" verticalLine={false}>
        <VerticalLine bottom="3.5rem"/>
        <div className="small-circle-container">
          <div className="small-circle"></div>
        </div>
        <IconNav iconClassName="analysis-result-1"/>
        <ItemContent className="no-border">
          <header>HBV-DNA检查</header>
          <div className="content-item">
            <header className="flex">
              <div className="flex1">产后28周</div>
              <div className="flex1">1.28E+06</div>
            </header>
            <div className="check-date">
              <span>检查日期：2017-02-20</span>
            </div>
          </div>

          <div className="content-item">
            <header className="flex">
              <div className="flex1">产后5周</div>
              <div className="flex1">1.28E+04</div>
            </header>
            <div className="check-date">检查日期：2017-02-20</div>
          </div>

          <div className="content-item">
            <header className="flex">
              <div className="flex1">孕38周</div>
              <div className="flex1">&lt;2.00E+02</div>
            </header>
            <div className="check-date">检查日期：2017-02-21</div>
          </div>
        </ItemContent>
      </Item>
    )
  }
}

export default HBV_DNA
