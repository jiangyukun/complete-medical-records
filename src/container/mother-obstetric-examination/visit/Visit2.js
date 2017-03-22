/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'

class Visit2 extends React.Component {
  render() {
    const {visit2} =this.props

    return (
      <Item className="visit-type-2">
        <IconNav iconClassName="obstetric-icon-2"/>
        <ItemContent>
          <header className="flex">
            <div className="flex1">访视2 - 孕24~32周</div>
            <div className="flex1">{visit2['visit_Date']}</div>
          </header>
          <div className="content-item">
            <header>穿刺史</header>
            <div className="flex">
              <div className="flex1">
                <span>日期： {visit2['puncture_Date']}</span>
              </div>
              <div className="flex1">
                <span>类型： {visit2['puncture_Type']}</span>
              </div>
            </div>
          </div>

          <div className="content-item">
            <header>阴道出血</header>
            <span>日期： {visit2['vaginal_Bleeding_Begin_Date']} ~ {visit2['vaginal_Bleeding_End_Date']}</span>
            <div className="mt-7">
              <span>采取措施： {visit2['vaginal_Bleeding_Measure']}</span>
            </div>
            <div className="flex mt-7">
              <div className="flex1">
                <span>性质： {visit2['vaginal_Bleeding_Final']}</span>
              </div>
              <div className="flex1">
                <span>结局： {visit2['vaginal_Bleeding_Nature']}</span>
              </div>
            </div>
          </div>

          <div className="content-item">
            <header>人工流产</header>
            <span>{visit2['abortion']}</span>
          </div>
        </ItemContent>
      </Item>
    )
  }
}

export default Visit2
