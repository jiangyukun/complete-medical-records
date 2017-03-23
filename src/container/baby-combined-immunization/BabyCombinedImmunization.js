/**
 * Created by jiangyukun on 2017/3/23.
 */
import React from 'react'

import DeliverTime from './combined-immunization/DeliverTime'
import FirstDose from './combined-immunization/FirstDose'
import SecondDose from './combined-immunization/SecondDose'
import ThirdDose from './combined-immunization/ThirdDose'
import SupplementSituation from './combined-immunization/SupplementSituation'
import ForReferenceOnly from '../ForReferenceOnly'

class BabyCombinedImmunization extends React.Component {

  render() {
    return (
      <div className="content-wrap">
        <DeliverTime/>
        <FirstDose/>
        <SecondDose/>
        <ThirdDose/>
        <SupplementSituation/>
        <ForReferenceOnly/>
      </div>
    )
  }
}

export default BabyCombinedImmunization
