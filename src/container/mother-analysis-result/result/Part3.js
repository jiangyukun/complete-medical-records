/**
 * Created by jiangyukun on 2017/3/21.
 */
import React from 'react'

import {TableList, Head, Row, Desc, Item} from '../../../component/table-list/'

class Part3 extends React.Component {

  render() {
    return (
      <TableList>
        <Head>
          <Desc/>
          <Item>HBsAg</Item>
          <Item>HBsAb</Item>
          <Item>HBeAg</Item>
          <Item>HBeAb</Item>
          <Item>HBcAb</Item>
        </Head>
        {
          ['产后28周', '产后5周', '孕38周', '检查日期'].map((item, index) => {
            return (
              <Row key={index}>
                <Desc>
                  <div className="period-name-desc">{item}</div>
                  <div className="period-time">2017-02-20</div>
                </Desc>
                <Item>
                  <i className="plus-icon"></i>
                </Item>
                <Item>
                  <i className="minus-icon"></i>
                </Item>
                <Item>
                  <i className="minus-icon"></i>
                </Item>
                <Item>
                  179.23
                </Item>
                <Item>
                  <i className="plus-icon"></i>
                </Item>
              </Row>
            )
          })
        }
      </TableList>
    )
  }
}

export default Part3
