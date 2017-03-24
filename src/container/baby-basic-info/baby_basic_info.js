/**
 * Created by jiangyukun on 2017/01/13.
 */
import {fromJS} from 'immutable'
import {baby} from '../../constants/action-type'
import phase from '../../constants/phase'

const defaultValue = {
  baby_Info: {}
}

export default function babyBasicInfo(state = defaultValue, action) {
  const iState = fromJS(state)
  return nextState()

  function nextState() {
    let nextIState = iState
    switch (action.type) {

      case baby.FETCH_BASIC_INFO + phase.SUCCESS:
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
