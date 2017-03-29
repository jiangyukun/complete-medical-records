/**
 * Created by jiangyukun on 2017/3/21.
 */
import React from 'react'

import {TableList, Head, Row, Desc, Item} from '../../../component/table-list/'
import {getText} from '../../../helper/utils'

class Part2 extends React.Component {

  render() {
    let {part2} = this.props
    if (!part2 || part2.length == 0) {
      return <div className="check-item-empty">无肝功能检查记录</div>
    }

    return (
      <TableList>
        <Head>
          <Desc/>
          <Item>ALT</Item>
          <Item>AST</Item>
          <Item>TBIL</Item>
          <Item>DBIL</Item>
          <Item>ALB</Item>
        </Head>
        {
          part2.map((item, index) => {
            return (
              <Row key={index}>
                <Desc>
                  <div className="period-name-desc">{item['pregnancy_States']}</div>
                  <div className="period-time">{item['check_Liver_Check_Date']}</div>
                </Desc>
                <Item>{getText(item['liver_ALT_Result'])}</Item>
                <Item>{getText(item['liver_AST_Result'])}</Item>
                <Item>{getText(item['liver_TBIL_Result'])}</Item>
                <Item>{getText(item['liver_DBIL_Result'])}</Item>
                <Item>{getText(item['liver_ALB_Result'])}</Item>
              </Row>
            )
          })
        }
      </TableList>
    )
  }
}

export default Part2
