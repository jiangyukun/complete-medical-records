/**
 * Created by jiangyukun on 2017/3/21.
 */
import React from 'react'

class Head extends React.Component {

  render() {
    return (
      <div className="head">
        {this.props.children}
      </div>
    )
  }
}

export default Head
