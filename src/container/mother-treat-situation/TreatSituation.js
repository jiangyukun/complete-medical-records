/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

import '../css/liver-protection-medicine.scss'
import AntiVirusMedicine from './treat/AntiVirusMedicine'
import LiverProtectionMedicine from './treat/LiverProtectionMedicine'
import MedicineUntowardEffect from './treat/MedicineUntowardEffect'
import ForReferenceOnly from '../ForReferenceOnly'

class TreatSituation extends React.Component {

  render() {
    return (
      <div className="content-wrap">
        <AntiVirusMedicine/>
        <LiverProtectionMedicine/>
        <MedicineUntowardEffect/>
        <ForReferenceOnly/>
      </div>
    )
  }
}

export default TreatSituation
