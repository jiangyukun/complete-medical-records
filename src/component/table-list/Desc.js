/**
 * Created by jiangyukun on 2017/3/21.
 */
import React from 'react'

class Desc extends React.Component {

  render() {
    return (
      <div className="row-desc">{this.props.children}</div>
    )
  }
}

export default Desc
