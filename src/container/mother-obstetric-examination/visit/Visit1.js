/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'
import {check, getText, getStartEndDate} from '../../../helper/utils'

class Visit1 extends React.Component {
  render() {
    const {visit1} = this.props

    return (
      <Item>
        <IconNav iconClassName="obstetric-icon-1"/>
        <ItemContent>
          <header className="flex">
            <div className="flex1">访视1 - 孕12~24周</div>
            <div className="flex1">{getText(visit1['visit_Date'])}</div>
          </header>
          <div className="content-item">
            <header>穿刺史</header>
            {
              check.yes(visit1['puncture']) && (
                <div className="flex">
                  <div className="flex1">
                    <span>日期： {getText(visit1['puncture_Date'])}</span>
                  </div>
                  <div className="flex1">
                    <span>类型： {getText(visit1['puncture_Type'])}</span>
                  </div>
                </div>
              )
            }
            {
              check.no(visit1['puncture']) && (<span>无穿刺史</span>)
            }
            {
              check.empty(visit1['puncture']) && (<span>暂无记录</span>)
            }
          </div>

          <div className="content-item">
            <header>阴道出血</header>

            {
              check.yes(visit1['vaginal_Bleeding']) && (
                <span>日期： {getStartEndDate(visit1['vaginal_Bleeding_Begin_Date'], visit1['vaginal_Bleeding_End_Date'])}</span>
              )
            }
            {
              check.yes(visit1['vaginal_Bleeding']) && (
                <div className="mt-7">
                  <span>采取措施： {getText(visit1['vaginal_Bleeding_Measure'])}</span>
                </div>
              )
            }
            {
              check.yes(visit1['vaginal_Bleeding']) && (
                <div className="flex mt-7">
                  <div className="flex1">
                    <span>性质： {getText(visit1['vaginal_Bleeding_Nature'])}</span>
                  </div>
                  <div className="flex1">
                    <span>结局： {getText(visit1['vaginal_Bleeding_Final'])}</span>
                  </div>
                </div>
              )
            }

            {
              check.no(visit1['vaginal_Bleeding']) && (<span>无阴道出血</span>)
            }
            {
              check.empty(visit1['vaginal_Bleeding']) && (<span>暂无记录</span>)
            }
          </div>

          <div className="content-item">
            <header>人工流产</header>
            {
              check.yes(visit1['abortion']) && (<span>人工流产日期： {getText(visit1['abortion_Date'])}</span>)
            }
            {
              check.no(visit1['abortion']) && (<span>未人工流产</span>)
            }
            {
              check.empty(visit1['abortion']) && (<span>暂无记录</span>)
            }
          </div>
        </ItemContent>
      </Item>
    )
  }
}

export default Visit1
