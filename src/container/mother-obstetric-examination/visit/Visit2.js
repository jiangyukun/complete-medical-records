/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'
import {check, getStartEndDate} from '../../../helper/utils'

class Visit2 extends React.Component {
  render() {
    const {visit2} = this.props

    return (
      <Item className="visit-type-2">
        <IconNav iconClassName="obstetric-icon-2"/>
        <ItemContent>
          <header className="flex">
            <div className="flex1">访视2 - 孕24~32周</div>
            <div className="flex1">{visit2['visit_Date'] && visit2['visit_Date']}</div>
          </header>
          <div className="content-item">
            <header>穿刺史</header>
            {
              check.yes(visit2['puncture']) && (
                <div className="flex">
                  <div className="flex1">
                    <span>日期： {visit2['puncture_Date']}</span>
                  </div>
                  <div className="flex1">
                    <span>类型： {visit2['puncture_Type']}</span>
                  </div>
                </div>
              )
            }
            {
              check.no(visit2['puncture']) && (<span>无穿刺史</span>)
            }
            {
              check.empty(visit2['puncture']) && (<span>暂无记录</span>)
            }
          </div>

          <div className="content-item">
            <header>阴道出血</header>
            {
              check.yes(visit2['vaginal_Bleeding']) && (
                <span>日期： {getStartEndDate(visit2['vaginal_Bleeding_Begin_Date'], visit2['vaginal_Bleeding_End_Date'])}</span>
              )
            }
            {
              check.yes(visit2['vaginal_Bleeding']) && (
                <div className="mt-7">
                  <span>采取措施： {visit2['vaginal_Bleeding_Measure']}</span>
                </div>
              )
            }
            {
              check.yes(visit2['vaginal_Bleeding']) && (
                <div className="flex mt-7">
                  <div className="flex1">
                    <span>性质： {visit2['vaginal_Bleeding_Nature']}</span>
                  </div>
                  <div className="flex1">
                    <span>结局： {visit2['vaginal_Bleeding_Final']}</span>
                  </div>
                </div>
              )
            }

            {
              check.no(visit2['vaginal_Bleeding']) && (<span>无阴道出血</span>)
            }
            {
              check.empty(visit2['vaginal_Bleeding']) && (<span>暂无记录</span>)
            }
          </div>

          <div className="content-item">
            <header>人工流产</header>
            {
              check.yes(visit2['abortion']) && (<span>末次月经日期： {visit2['puncture_Date']}</span>)
            }
            {
              check.no(visit2['abortion']) && (<span>未人工流产</span>)
            }
            {
              check.empty(visit2['abortion']) && (<span>暂无记录</span>)
            }

          </div>
        </ItemContent>
      </Item>
    )
  }
}

export default Visit2
