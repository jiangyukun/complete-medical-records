/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'

class Visit3 extends React.Component {
  render() {
    const {visit3} =this.props

    return (
      <Item className="visit-type-3">
        <IconNav iconClassName="obstetric-icon-3"/>
        <ItemContent>
          <header className="flex">
            <div className="flex1">访视3 - 分娩</div>
            <div className="flex1">{visit3['visit_Date']}</div>
          </header>
          <div className="content-item">
            <header>穿刺史</header>
            <div className="flex">
              <div className="flex1">
                <span>日期： {visit3['puncture_Date']}</span>
              </div>
              <div className="flex1">
                <span>类型： {visit3['puncture_Type']}</span>
              </div>
            </div>
          </div>

          <div className="content-item">
            <header>阴道出血</header>
            <span>{visit3['vaginal_Bleeding']}</span>
          </div>

          <div className="content-item">
            <header>人工流产</header>
            <span>{visit3['abortion']}</span>
          </div>
        </ItemContent>
      </Item>
    )
  }
}

export default Visit3
