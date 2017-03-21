/**
 * Created by jiangyukun on 2017/3/21.
 */
import React from 'react'

import {TableList, Head, Row, Desc, Item} from '../../../component/table-list/'

class Part2 extends React.Component {

  render() {
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
          ['产后28周', '产后5周', '孕38周', '检查日期'].map((item, index) => {
            return (
              <Row key={index}>
                <Desc>
                  <div className="period-name-desc">{item}</div>
                  <div className="period-time">2017-02-20</div>
                </Desc>
                <Item>173.29</Item>
                <Item>173.29</Item>
                <Item>173.29</Item>
                <Item>173.29</Item>
                <Item>173.29</Item>
              </Row>
            )
          })
        }
      </TableList>
    )
  }
}

export default Part2
