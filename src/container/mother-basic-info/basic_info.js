/**
 * Created by jiangyukun on 2017/01/13.
 */
import {fromJS} from 'immutable'
import {mother} from '../../constants/action-type'
import phase from '../../constants/phase'

const defaultValue = {
  baseInfo: {}
}

export default function motherBasicInfo(state = defaultValue, action) {
  const iState = fromJS(state)
  return nextState()

  function nextState() {
    let nextIState = iState
    switch (action.type) {

      case mother.FETCH_BASIC_INFO + phase.SUCCESS:
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
