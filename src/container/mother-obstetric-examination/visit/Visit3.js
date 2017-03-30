/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'
import {check, getText, getStartEndDate} from '../../../helper/utils'

class Visit3 extends React.Component {
  render() {
    const {visit3} = this.props

    return (
      <Item className="visit-type-3">
        <IconNav iconClassName="obstetric-icon-3"/>
        <ItemContent>
          <header className="flex">
            <div className="flex1">访视3 - 分娩</div>
            <div className="flex1">{getText(visit3['visit_Date'])}</div>
          </header>
          <div className="content-item">
            <header>穿刺史</header>
            {
              check.yes(visit3['puncture']) && (
                <div className="flex">
                  <div className="flex1">
                    <span>日期： {getText(visit3['puncture_Date'])}</span>
                  </div>
                  <div className="flex1">
                    <span>类型： {getText(visit3['puncture_Type'])}</span>
                  </div>
                </div>
              )
            }
            {
              check.no(visit3['puncture']) && (<span>无穿刺史</span>)
            }
            {
              check.empty(visit3['puncture']) && (<span>暂无记录</span>)
            }
          </div>

          <div className="content-item">
            <header>阴道出血</header>
            {
              check.yes(visit3['vaginal_Bleeding']) && (
                <span>日期： {getStartEndDate(visit3['vaginal_Bleeding_Begin_Date'], visit3['vaginal_Bleeding_End_Date'])}</span>
              )
            }
            {
              check.yes(visit3['vaginal_Bleeding']) && (
                <div className="mt-7">
                  <span>采取措施： {getText(visit3['vaginal_Bleeding_Measure'])}</span>
                </div>
              )
            }
            {
              check.yes(visit3['vaginal_Bleeding']) && (
                <div className="flex mt-7">
                  <div className="flex1">
                    <span>性质： {getText(visit3['vaginal_Bleeding_Nature'])}</span>
                  </div>
                  <div className="flex1">
                    <span>结局： {getText(visit3['vaginal_Bleeding_Final'])}</span>
                  </div>
                </div>
              )
            }

            {
              check.no(visit3['vaginal_Bleeding']) && (<span>无阴道出血</span>)
            }
            {
              check.empty(visit3['vaginal_Bleeding']) && (<span>暂无记录</span>)
            }
          </div>

          <div className="content-item">
            <header>人工流产</header>
            {
              check.yes(visit3['abortion']) && (<span>人工流产日期： {getText(visit3['abortion_Date'])}</span>)
            }
            {
              check.no(visit3['abortion']) && (<span>未人工流产</span>)
            }
            {
              check.empty(visit3['abortion']) && (<span>暂无记录</span>)
            }

          </div>
        </ItemContent>
      </Item>
    )
  }
}

export default Visit3
