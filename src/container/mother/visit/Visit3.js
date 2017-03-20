/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'

class Visit1 extends React.Component {
  render() {
    return (
      <Item className="visit-type-3">
        <IconNav iconClassName="obstetric-icon-3"/>
        <ItemContent>
          <header className="flex">
            <div className="flex1">访视3 - 分娩</div>
            <div className="flex1">2017年11月6日</div>
          </header>
          <div className="content-item">
            <header>穿刺史</header>
            <div className="flex">
              <div className="flex1">
                <span>日期： 2016-05-03</span>
              </div>
              <div className="flex1">
                <span>类型： 羊膜腔穿刺</span>
              </div>
            </div>
          </div>

          <div className="content-item">
            <header>阴道出血</header>
            <span>无阴道出血</span>
          </div>

          <div className="content-item">
            <header>人工流产</header>
            <span>未人工流产</span>
          </div>
        </ItemContent>
      </Item>
    )
  }
}

export default Visit1
