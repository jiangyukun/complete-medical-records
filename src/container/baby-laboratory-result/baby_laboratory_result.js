/**
 * Created by jiangyukun on 2017/01/13.
 */
import {fromJS} from 'immutable'
import {baby} from '../../constants/action-type'
import phase from '../../constants/phase'

const defaultValue = {
  baby_HBV_List: [],
  baby_Hepatitis_B_Five_List: []
}

export default function babyLaboratoryResult(state = defaultValue, action) {
  const iState = fromJS(state)
  return nextState()

  function nextState() {
    let nextIState = iState
    switch (action.type) {

      case baby.FETCH_BABY_LABORATORY_RESULT + phase.SUCCESS:
        nextIState = fromJS(action.result)
        break
    }
    if (nextIState == iState) {
      return state
    }
    return nextIState.toJS()
  }

  //-----------------------------------------

}
