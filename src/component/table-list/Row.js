/**
 * Created by jiangyukun on 2017/3/21.
 */
import React from 'react'

class Row extends React.Component {

  render() {
    return (
      <div className="row">
        {this.props.children}
      </div>
    )
  }
}

export default Row
