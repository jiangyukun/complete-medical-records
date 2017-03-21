/**
 * Created by jiangyukun on 2017/3/21.
 */
import React from 'react'

const VerticalLine = (props) => <div className="vertical-line" style={{bottom: props.bottom}}></div>

VerticalLine.propTypes = {
  bottom: React.PropTypes.string
}

export default VerticalLine
