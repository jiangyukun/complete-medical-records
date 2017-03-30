/**
 * Created by jiangyukun on 2017/3/21.
 */
import React from 'react'

import LineChartDialog from '../../line-chart/LineChartDialog'
import {Item, IconNav, ItemContent} from '../../../component/'
import VerticalLine from '../../../component/VerticalLine'

class Baby_HBV_DNA extends React.Component {
  state = {
    showLineChart: false
  }

  handleLineChartClick = () => {
    this.setState({showLineChart: true})
  }

  render() {
    const hbvDnaList = this.props.hbvDnaList || []
    const listReverse = hbvDnaList.map(item => item).reverse()
    const lineChartData = listReverse.map(item => ({
      periodName: item['week_Of_Age'],
      date: item['babay_Check_Liver_HBV_DNA_Date'],
      value: item['baby_Liver_HBV_DNA_Result'] || ''
    }))

    return (
      <Item className="laboratory-result-item" verticalLine={false}>
        {
          this.state.showLineChart && (
            <LineChartDialog lineChartData={lineChartData}
                             onExited={() => this.setState({showLineChart: false})}/>
          )
        }
        <VerticalLine bottom="3.5rem"/>
        <div className="small-circle-container">
          <i className="small-circle"></i>
        </div>
        <div className="line-chart-container" onClick={this.handleLineChartClick}>
          <i className="line-chart-icon"></i>
        </div>
        <IconNav iconClassName="hbv-dna-icon"/>
        <ItemContent className="no-border">
          <header>HBV-DNA检查</header>
          {
            hbvDnaList.length == 0 && (
              <div className="content-item">无HBV-DNA检查记录</div>
            )
          }
          {
            hbvDnaList.map((hbvDna, index) => {
              return (
                <div key={index} className="content-item">
                  <header className="flex">
                    <div className="flex1">{hbvDna['week_Of_Age']}</div>
                    <div className="flex1">{hbvDna['baby_Liver_HBV_DNA_Result']}</div>
                  </header>
                  <div className="check-date">
                    <span>检查日期：{hbvDna['babay_Check_Liver_HBV_DNA_Date']}</span>
                  </div>
                </div>
              )
            })
          }
        </ItemContent>
      </Item>
    )
  }
}

export default Baby_HBV_DNA
