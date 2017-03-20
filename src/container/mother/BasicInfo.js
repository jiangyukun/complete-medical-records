/**
 * 基本信息
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

import BasicProfile from '../profile/BasicProfile'
import ProfileHepatitisB from '../profile/ProfileHepatitisB'
import ProfilePregnant from '../profile/ProfilePregnant'
import ProfileDeliver from '../profile/ProfileDeliver'
import ProfileQueueComplete from '../profile/ProfileQueueComplete'
import ForReferenceOnly from '../ForReferenceOnly'
import '../css/basic-info.scss'

class BasicInfo extends React.Component {

  render() {
    return (
      <div className="content-wrap">
        <BasicProfile/>
        <ProfileHepatitisB/>
        <ProfilePregnant/>
        <ProfileDeliver/>
        <ProfileQueueComplete/>
        <ForReferenceOnly/>
      </div>
    )
  }
}

export default BasicInfo
