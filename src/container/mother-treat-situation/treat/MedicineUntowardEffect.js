/**
 * 药物不良反应
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'
import {check, getText, getStartEndDate} from '../../../helper/utils'

class MedicineUntowardEffect extends React.Component {

  render() {
    const untowardEffect = this.props.medicineUntowardEffect || []

    return (
      <Item className="item-padding">
        <IconNav iconClassName="liver-icon-3"/>
        <ItemContent>
          <header>药物相关不良反应记录</header>
          {
            untowardEffect.length == 0 && (
              <div className="content-item">无不良反应记录</div>
            )
          }
          {
            untowardEffect.length != 0 && untowardEffect.map((untowardEffect, index) => {
              return (
                <div key={index} className="content-item">
                  <div>不良反应名称：{getText(untowardEffect['adverse_Reactions_Name'])}</div>
                  <div className="mt-7">反应时间：{getStartEndDate(untowardEffect['satrt_Time'], untowardEffect['end_Time'])}</div>
                  <div className="flex mt-7">
                    <div className="flex1">
                      <span>程度：{getText(untowardEffect['reactions_Degree'])}</span>
                    </div>
                    <div className="flex1">
                      <span>结局： {getText(untowardEffect['reactions_Final'])}</span>
                    </div>
                  </div>
                  <div className="mt-7">措施： {getText(untowardEffect['measure'])}</div>
                </div>
              )
            })
          }
        </ItemContent>
      </Item>
    )
  }
}

MedicineUntowardEffect.propTypes = {
  medicineUntowardEffect: React.PropTypes.array
}

export default MedicineUntowardEffect
