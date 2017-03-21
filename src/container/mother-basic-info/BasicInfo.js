/**
 * 基本信息
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'
import {connect} from 'react-redux'

import '../css/basic-info.scss'
import BasicProfile from './profile/BasicProfile'
import ProfileHepatitisB from './profile/ProfileHepatitisB'
import ProfilePregnant from './profile/ProfilePregnant'
import ProfileDeliver from './profile/ProfileDeliver'
import ProfileQueueComplete from './profile/ProfileQueueComplete'
import ForReferenceOnly from '../ForReferenceOnly'

// import {} from './action'

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

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, {})(BasicInfo)
