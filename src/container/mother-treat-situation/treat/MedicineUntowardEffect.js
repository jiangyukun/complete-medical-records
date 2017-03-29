/**
 * 药物不良反应
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'

class MedicineUntowardEffect extends React.Component {

  render() {
    const untowardEffect = this.props.medicineUntowardEffect
    return (
      <Item className="item-padding">
        <IconNav iconClassName="liver-icon-3"/>
        <ItemContent>
          <header>药物相关不良反应记录</header>
          {
            untowardEffect && untowardEffect.length != 0 ? untowardEffect.map((untowardEffect, index) => {
              return (
                <div className="content-item">
                  <div>不良反应名称： 恶心</div>
                  <div className="mt-7">反应时间： 2017-01-28 ~ 2017-02-03</div>
                  <div className="flex mt-7">
                    <div className="flex1">
                      <span>程度： 危及生命</span>
                    </div>
                    <div className="flex1">
                      <span>结局： 痊愈</span>
                    </div>
                  </div>
                  <div className="mt-7">措施： 住院治疗或者延长住院治疗</div>
                </div>
              )
            }) : (
              <div className="content-item">无不良反应记录</div>
            )
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
