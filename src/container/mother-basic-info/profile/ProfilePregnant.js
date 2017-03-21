/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

class ProfilePregnant extends React.Component {

  render() {
    return (
      <section className="profile-pregnant">
        <div className="vertical-line"></div>
        <div className="profile-icon">
          <i className="profile-icon-3"></i>
        </div>
        <div className="profile-item-description">
          <header>孕产期</header>
          <div className="profile-items">
            <span>末次月经日期： 2016-02-03</span>
            <div className="mt-7">
              <span>预产期： 2017-01-01</span>
            </div>
            <div className="flex mt-7">
              <div className="flex1">
                <span>生产次数： 7</span>
              </div>
              <div className="flex1">
                <span className="profile-item-monitory">存活子女数：2</span>
              </div>
            </div>
            <div className="mt-7">
              <span>是否有子女感染： 否</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ProfilePregnant
