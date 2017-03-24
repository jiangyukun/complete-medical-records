/**
 * Created by jiangyukun on 2017/3/23.
 */
import React from 'react'
import {connect} from 'react-redux'

import NewBabyProfile from './profile/NewBabyProfile'
import BreastMilkFeed from './profile/BreastMilkFeed'
import BabyJulySituation from './profile/BabyJulySituation'
import BlockBirthing from './profile/BlockBirthing'
import ForReferenceOnly from '../ForReferenceOnly'
import {fetchBasicInfo} from './baby-basic-info'

class BabyBasicInfo extends React.Component {
  componentDidMount() {
    this.props.fetchBasicInfo()
  }

  render() {
    const babyBasicInfo = this.props.babyBasicInfo.baby_Info

    return (
      <div className="content-wrap">
        <NewBabyProfile babyBasicInfo={babyBasicInfo}/>
        <BreastMilkFeed babyBasicInfo={babyBasicInfo}/>
        <BabyJulySituation babyBasicInfo={babyBasicInfo}/>
        <BlockBirthing babyBasicInfo={babyBasicInfo}/>
        <ForReferenceOnly babyBasicInfo={babyBasicInfo}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    babyBasicInfo: state['babyBasicInfo']
  }
}

export default connect(mapStateToProps, {
  fetchBasicInfo
})(BabyBasicInfo)
