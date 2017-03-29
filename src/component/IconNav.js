/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'
import classnames from 'classnames'

class IconNav extends React.Component {

  render() {
    return (
      <div className="icon-nav">
        <div className="profile-icon">
          <i className={classnames('icon', this.props.iconClassName)}></i>
        </div>
      </div>
    )
  }
}

IconNav.propTypes = {
  iconClassName: React.PropTypes.string
}

export default IconNav
