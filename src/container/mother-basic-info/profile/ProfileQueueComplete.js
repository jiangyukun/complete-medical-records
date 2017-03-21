/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

class ProfileQueueComplete extends React.Component {

  render() {
    return (
      <section className="profile-queue-complete">
        <div className="vertical-line"></div>
        <div className="profile-icon">
          <i className="profile-icon-5"></i>
        </div>
        <div className="profile-item-description">
          <header>队列完成情况</header>
          <div className="profile-items">
            <div>
              <span>是否完成队列： 否</span>
            </div>
            <div className="mt-7">
              <span>没有完成队列日期： 2017-02-14</span>
            </div>
            <div className="mt-7">
              <span>没有完成队列原因： 失访</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ProfileQueueComplete
