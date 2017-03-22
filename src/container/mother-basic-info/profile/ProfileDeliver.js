/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

class ProfileDeliver extends React.Component {

  render() {
    const {motherBasicInfo} = this.props
    const baseInfo = motherBasicInfo['baseInfo']
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
              <span>分娩时间： {baseInfo['delivery_Time']}</span>
            </div>
            <div className="mt-7">
              <span>分娩结局： {baseInfo['delivery_Final']}</span>
            </div>
            <div className="mt-7">
              <span>分娩方式： {baseInfo['delivery_Way']}</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

ProfileDeliver.propTypes = {
  motherBasicInfo: React.PropTypes.object
}

export default ProfileDeliver
