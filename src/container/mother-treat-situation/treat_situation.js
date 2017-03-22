/**
 * Created by jiangyukun on 2017/01/13.
 */
import {fromJS} from 'immutable'
import {mother} from '../../constants/action-type'
import phase from '../../constants/phase'

const defaultValue = {
  resist_virus_vo: [],
  protection_liver_vo: [],
  drug_reactions_vo: []
}

export default function treatSituation(state = defaultValue, action) {
  const iState = fromJS(state)
  return nextState()

  function nextState() {
    let nextIState = iState
    switch (action.type) {

      case mother.FETCH_TREAT_SITUATION + phase.SUCCESS:
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
