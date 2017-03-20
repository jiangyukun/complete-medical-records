/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'
import classnames from 'classnames'

class Item extends React.Component {

  render() {
    return (
      <section className={classnames('flex relative', this.props.className)}>
        <div className="vertical-line"></div>
        {this.props.children}
      </section>
    )
  }
}

Item.propTypes = {}

export default Item
