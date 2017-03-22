/**
 * Created by jiangyukun on 2017/3/21.
 */
import React from 'react'

import {TableList, Head, Row, Desc, Item} from '../../../component/table-list/'

class Part2 extends React.Component {

  render() {
    const {part2} = this.props

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
                <Item>{item['liver_ALT_Result']}</Item>
                <Item>{item['liver_AST_Result']}</Item>
                <Item>{item['liver_TBIL_Result']}</Item>
                <Item>{item['liver_DBIL_Result']}</Item>
                <Item>{item['liver_ALB_Result']}</Item>
              </Row>
            )
          })
        }
      </TableList>
    )
  }
}

export default Part2
