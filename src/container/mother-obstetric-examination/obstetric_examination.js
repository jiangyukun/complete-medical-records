/**
 * Created by jiangyukun on 2017/01/13.
 */
import {fromJS} from 'immutable'
import {mother} from '../../constants/action-type'
import phase from '../../constants/phase'

const defaultValue = {
  visitOneVo: {},
  visitTwoVo: {},
  visitThereVo: {},
}

export default function obstetricExamination(state = defaultValue, action) {
  const iState = fromJS(state)
  return nextState()

  function nextState() {
    let nextIState = iState
    switch (action.type) {
      case mother.FETCH_OBSTETRIC_EXAMINATION + phase.SUCCESS:
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
