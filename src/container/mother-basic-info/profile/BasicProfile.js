/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

class BasicProfile extends React.Component {

  render() {
    return (
      <section className="profile-basic">
        <div className="profile-icon">
          <i className="profile-icon-1"></i>
          <div className="vertical-line"></div>
        </div>
        <div className="profile-item-description">
          <header>一般情况和生命体征</header>
          <div className="profile-items">
            <div className="flex">
              <div className="flex1">
                <span>姓名：沙发</span>
              </div>
              <div className="flex1">
                <span className="profile-item-monitory">民族：汉族</span>
              </div>
            </div>
            <div className="mt-7">
              <span>出生日期：1990-01-01</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default BasicProfile
