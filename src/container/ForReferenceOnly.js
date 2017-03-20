/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

class ForReferenceOnly extends React.Component {

  render() {
    return (
      <div className="profile-for-reference-only">
        <div className="star-icon-container">
          <i className="star-icon"></i>
        </div>
        <div className="vertical-line"></div>
        <div className="for-reference-only">
          病历数据仅作为参考
        </div>
      </div>
    )
  }
}

export default ForReferenceOnly
