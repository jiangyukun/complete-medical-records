/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'
import classnames from 'classnames'

class ItemContent extends React.Component {

  render() {
    return (
      <div className={classnames('right-item-content', this.props.className)}>
        {this.props.children}
      </div>
    )
  }
}

ItemContent.propTypes = {
  className: React.PropTypes.string
}

export default ItemContent
