/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'

class Visit1 extends React.Component {
  render() {
    const {visit1} =this.props
    return (
      <Item>
        <IconNav iconClassName="obstetric-icon-1"/>
        <ItemContent>
          <header className="flex">
            <div className="flex1">访视1 - 孕12~24周</div>
            <div className="flex1">{visit1['visit_Date']}</div>
          </header>
          <div className="content-item">
            <header>穿刺史</header>
            <div className="flex">
              <div className="flex1">
                <span>日期： {visit1['puncture_Date']}</span>
              </div>
              <div className="flex1">
                <span>类型： {visit1['puncture_Type']}</span>
              </div>
            </div>
          </div>

          <div className="content-item">
            <header>阴道出血</header>
            <span>日期： {visit1['vaginal_Bleeding_Begin_Date']} ~ {visit1['vaginal_Bleeding_End_Date']}</span>
            <div className="mt-7">
              <span>采取措施： {visit1['vaginal_Bleeding_Measure']}</span>
            </div>
            <div className="flex mt-7">
              <div className="flex1">
                <span>性质： {visit1['vaginal_Bleeding_Nature']}</span>
              </div>
              <div className="flex1">
                <span>结局： {visit1['vaginal_Bleeding_Final']}</span>
              </div>
            </div>
          </div>

          <div className="content-item">
            <header>人工流产</header>
            <span>末次月经日期： {visit1['abortion']}</span>
          </div>
        </ItemContent>
      </Item>
    )
  }
}

export default Visit1
