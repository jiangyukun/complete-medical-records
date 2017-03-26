/**
 * Created by jiangyukun on 2017/3/23.
 */
import React from 'react'

import Modal from '../../component/modal/Modal'
import {loadD3AndDraw} from './line-chart'

class LineChartDialog extends React.Component {
  state = {
    show: true
  }

  close = () => {
    this.setState({show: false})
  }

  componentDidMount() {
    loadD3AndDraw(this._d3Container, this.props.lineChartData)
  }

  componentDidUpdate() {
    loadD3AndDraw(this._d3Container, this.props.lineChartData)
    // loadD3AndDraw(this._d3Container)
  }

  render() {
    return (
      <Modal show={this.state.show} onHide={this.close} onExited={this.props.onExited}>
        <div className="line-chart-content" onClick={this.close} ref={c => this._d3Container = c}></div>
      </Modal>
    )
  }
}

LineChartDialog.propTypes = {
  lineChartData: React.PropTypes.array,
  onExited: React.PropTypes.func
}

export default LineChartDialog
