/**
 * Created by jiangyukun on 2017/3/21.
 */
import React from 'react'

import {TableList, Head, Row, Desc, Item} from '../../../component/table-list/'

class LaboratoryResultPart2 extends React.Component {

  render() {
    const {part2List} = this.props

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
          part2List.map((item, index) => {
            return (
              <Row key={index}>
                <Desc>
                  <div className="period-name-desc">{item['week_Of_Age']}</div>
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

export default LaboratoryResultPart2
