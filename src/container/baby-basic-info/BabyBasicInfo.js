/**
 * Created by jiangyukun on 2017/3/23.
 */
import React from 'react'

import NewBabyProfile from './profile/NewBabyProfile'
import BreastMilkFeed from './profile/BreastMilkFeed'
import BabyJulySituation from './profile/BabyJulySituation'
import BlockBirthing from './profile/BlockBirthing'
import ForReferenceOnly from '../ForReferenceOnly'

class BabyBasicInfo extends React.Component {

  render() {
    return (
      <div className="content-wrap">
        <NewBabyProfile/>
        <BreastMilkFeed/>
        <BabyJulySituation/>
        <BlockBirthing/>
        <ForReferenceOnly/>
      </div>
    )
  }
}

export default BabyBasicInfo
