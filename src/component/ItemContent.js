/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

class ItemContent extends React.Component {

  render() {
    return (
      <div className="right-item-content">
        {this.props.children}
      </div>
    )
  }
}

ItemContent.propTypes = {}

export default ItemContent
