/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

import MotherPage from './MotherPage'
import BabyPage from './BabyPage'

class App extends React.Component {
  render() {
    if (this.props.isMotherMatched) {
      return (
        <MotherPage/>
      )
    }
    return (
      <BabyPage/>
    )
  }
}

App.propTypes = {
  isMotherMatched: React.PropTypes.bool
}

export default App
