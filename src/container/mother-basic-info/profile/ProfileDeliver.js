/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

class ProfileDeliver extends React.Component {

  render() {
    return (
      <section className="profile-deliver">
        <div className="vertical-line"></div>
        <div className="profile-icon">
          <i className="profile-icon-4"></i>
        </div>
        <div className="profile-item-description">
          <header>分娩情况</header>
          <div className="profile-items">
            <div>
              <span>分娩时间： 2016-12-20 18:29</span>
            </div>
            <div className="mt-7">
              <span>分娩结局： 活婴</span>
            </div>
            <div className="mt-7">
              <span>分娩方式： 顺产转剖宫产</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ProfileDeliver
