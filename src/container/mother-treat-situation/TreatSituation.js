/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'
import {connect} from 'react-redux'

import '../css/liver-protection-medicine.scss'
import AntiVirusMedicine from './treat/AntiVirusMedicine'
import LiverProtectionMedicine from './treat/LiverProtectionMedicine'
import MedicineUntowardEffect from './treat/MedicineUntowardEffect'
import ForReferenceOnly from '../ForReferenceOnly'

import {fetchTreatSituation} from './treat-situation'

class TreatSituation extends React.Component {

  componentDidMount() {
    this.props.fetchTreatSituation()
  }

  render() {
    const antiVirusMedicine = this.props.treatSituation['resist_virus_vo']
    const liverProtectionMedicine = this.props.treatSituation['protection_liver_vo']
    const medicineUntowardEffect = this.props.treatSituation['drug_reactions_vo']

    return (
      <div className="content-wrap">
        <AntiVirusMedicine antiVirusMedicine={antiVirusMedicine}/>
        <LiverProtectionMedicine liverProtectionMedicine={liverProtectionMedicine}/>
        <MedicineUntowardEffect medicineUntowardEffect={medicineUntowardEffect}/>
        <ForReferenceOnly/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    treatSituation: state['treatSituation']
  }
}

export default connect(mapStateToProps, {
  fetchTreatSituation
})(TreatSituation)
