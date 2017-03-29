/**
 * Created by jiangyukun on 2017/3/21.
 */
import React from 'react'

import {TableList, Head, Row, Desc, Item} from '../../../component/table-list/'

class Part3 extends React.Component {

  render() {
    let {part3} = this.props
    if (!part3 || part3.length == 0) {
      return <div className="check-item-empty">无乙肝五项检查记录</div>
    }

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
          part3.map((item, index) => {
            return (
              <Row key={index}>
                <Desc>
                  <div className="period-name-desc">{item['pregnancy_States']}</div>
                  <div className="period-time">{item['check_Date']}</div>
                </Desc>
                {
                  ['hbsAg_Result', 'hbsAb_Result', 'hbeAg_Result', 'hbeAb_Result', 'hbcAb_Result'].map(key => {
                    return (
                      <Item key={key}>
                        {
                          item[key] == '阳性' && (
                            <i className="plus-icon"></i>
                          )
                        }
                        {
                          item[key] == '阴性' && (
                            <i className="minus-icon"></i>
                          )
                        }
                        {
                          item[key] != '阴性' && item[key] != '阳性' && (
                            <span>{item[key]}</span>
                          )
                        }
                      </Item>
                    )
                  })
                }
              </Row>
            )
          })
        }
      </TableList>
    )
  }
}

export default Part3
