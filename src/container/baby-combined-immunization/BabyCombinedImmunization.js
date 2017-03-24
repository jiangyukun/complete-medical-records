/**
 * Created by jiangyukun on 2017/3/23.
 */
import React from 'react'
import {connect} from 'react-redux'

import DeliverTime from './combined-immunization/DeliverTime'
import FirstDose from './combined-immunization/FirstDose'
import SecondDose from './combined-immunization/SecondDose'
import ThirdDose from './combined-immunization/ThirdDose'
import SupplementSituation from './combined-immunization/SupplementSituation'
import ForReferenceOnly from '../ForReferenceOnly'
import {fetchBabyCombinedImmunization} from './baby-combined-communization'

class BabyCombinedImmunization extends React.Component {
  componentDidMount() {
    this.props.fetchBabyCombinedImmunization()
  }

  render() {
    const deliverTime = this.props.babyCombinedImmunization['delivery_Time']
    const firstDose = this.props.babyCombinedImmunization['first_Needle_Vo']
    const secondDose = this.props.babyCombinedImmunization['second_Needle_Vo']
    const thirdDose = this.props.babyCombinedImmunization['third_Needle_Vo']
    const supplementSituation = this.props.babyCombinedImmunization['supplement_Vo']

    return (
      <div className="content-wrap">
        <DeliverTime deliverTime={deliverTime}/>
        <FirstDose firstDose={firstDose}/>
        <SecondDose secondDose={secondDose}/>
        <ThirdDose thirdDose={thirdDose}/>
        <SupplementSituation supplementSituation={supplementSituation}/>
        <ForReferenceOnly/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    babyCombinedImmunization: state['babyCombinedImmunization']
  }
}

export default connect(mapStateToProps, {
  fetchBabyCombinedImmunization
})(BabyCombinedImmunization)
