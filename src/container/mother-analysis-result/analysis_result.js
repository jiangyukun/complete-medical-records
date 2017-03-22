/**
 * Created by jiangyukun on 2017/01/13.
 */
import {fromJS} from 'immutable'
import {mother} from '../../constants/action-type'
import phase from '../../constants/phase'

const defaultValue = {
  hbv_Dna_List: [],
  liver_Result_List: [],
  check_five_List: [],
  liver_B_List: [],
}

export default function analysisResult(state = defaultValue, action) {
  const iState = fromJS(state)
  return nextState()

  function nextState() {
    let nextIState = iState
    switch (action.type) {

      case mother.FETCH_ANALYSIS_RESULT + phase.SUCCESS:
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
