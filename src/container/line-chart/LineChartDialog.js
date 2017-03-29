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
    loadD3AndDraw(this._svg, this.props.lineChartData)
  }

  render() {
    return (
      <Modal show={this.state.show} onHide={this.close} onExited={this.props.onExited} className="full-parent">
        <div className="line-chart-close-button-container">
          <span className="line-chart-close-button" onClick={this.close}>&times;</span>
        </div>
        <div className="line-chart-content">
          <svg ref={c => this._svg = c}>
            <defs>
              <linearGradient id="linearColor" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" className="stop1"></stop>
                <stop offset="1" className="stop2"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </Modal>
    )
  }
}

LineChartDialog.propTypes = {
  lineChartData: React.PropTypes.array,
  onExited: React.PropTypes.func
}

export default LineChartDialog
