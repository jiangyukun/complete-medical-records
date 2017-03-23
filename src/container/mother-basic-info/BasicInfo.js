/**
 * 基本信息
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'
import {connect} from 'react-redux'

import BasicProfile from './profile/BasicProfile'
import ProfileHepatitisB from './profile/ProfileHepatitisB'
import ProfilePregnant from './profile/ProfilePregnant'
import ProfileDeliver from './profile/ProfileDeliver'
import ProfileQueueComplete from './profile/ProfileQueueComplete'
import ForReferenceOnly from '../ForReferenceOnly'

import {fetchBasicInfo} from './basic-info'

class BasicInfo extends React.Component {

  componentDidMount() {
    this.props.fetchBasicInfo()
  }

  render() {
    return (
      <div className="content-wrap">
        <BasicProfile motherBasicInfo={this.props.motherBasicInfo}/>
        <ProfileHepatitisB motherBasicInfo={this.props.motherBasicInfo}/>
        <ProfilePregnant motherBasicInfo={this.props.motherBasicInfo}/>
        <ProfileDeliver motherBasicInfo={this.props.motherBasicInfo}/>
        <ProfileQueueComplete motherBasicInfo={this.props.motherBasicInfo}/>
        <ForReferenceOnly motherBasicInfo={this.props.motherBasicInfo}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    motherBasicInfo: state['motherBasicInfo']
  }
}

export default connect(mapStateToProps, {
  fetchBasicInfo
})(BasicInfo)
