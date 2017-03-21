/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

class ProfileHepatitisB extends React.Component {

  render() {
    return (
      <section className="profile-hepatitis-b">
        <div className="vertical-line"></div>
        <div className="profile-icon">
          <i className="profile-icon-2"></i>
        </div>
        <div className="profile-item-description">
          <header>乙肝相关病史</header>
          <div className="profile-items">
            <span>乙肝确诊日期： 1990-01-03</span>
            <div className="mt-7">
              <span>亲属中乙肝病毒感染者：母亲、父亲</span>
            </div>
            <div className="mt-7">
              <span>合并感染情况：无/未知/丙肝/丙肝、HIV</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ProfileHepatitisB
