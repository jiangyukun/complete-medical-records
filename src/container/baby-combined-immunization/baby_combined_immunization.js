/**
 * Created by jiangyukun on 2017/01/13.
 */
import {fromJS} from 'immutable'
import {baby} from '../../constants/action-type'
import phase from '../../constants/phase'

const defaultValue = {
  delivery_Time: '',
  first_Needle_Vo: {},
  second_Needle_Vo: {},
  third_Needle_Vo: {},
  supplement_Vo: null,
}

export default function babyCombinedImmunization(state = defaultValue, action) {
  const iState = fromJS(state)
  return nextState()

  function nextState() {
    let nextIState = iState
    switch (action.type) {

      case baby.FETCH_BABY_COMBINED_IMMUNIZATION + phase.SUCCESS:
        nextIState = fromJS(action.result)
        break
    }
    if (nextIState === iState) {
      return state
    }
    return nextIState.toJS()
  }

  //-----------------------------------------

}
