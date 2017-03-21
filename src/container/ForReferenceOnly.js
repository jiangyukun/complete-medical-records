/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'
import classnames from 'classnames'

class ForReferenceOnly extends React.Component {
  render() {
    return (
      <div className={classnames('profile-for-reference-only', this.props.className)}>
        <div className="star-icon-container">
          <i className="star-icon"></i>
        </div>
        {
          this.props.verticalLine && (
            <div className="vertical-line"></div>
          )
        }
        <div className="for-reference-only">
          病历数据仅作为参考
        </div>
      </div>
    )
  }
}

ForReferenceOnly.defaultProps = {
  verticalLine: true,
  className: ''
}

ForReferenceOnly.propTypes = {
  verticalLine: React.PropTypes.bool,
  className: React.PropTypes.string
}

export default ForReferenceOnly
