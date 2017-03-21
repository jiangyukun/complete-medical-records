/**
 * Created by jiangyukun on 2017/3/21.
 */
import React from 'react'

class Item extends React.Component {

  render() {
    return (
      <div className="item">{this.props.children}</div>
    )
  }
}

export default Item
