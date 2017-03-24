/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'
import {Provider} from 'react-redux'

import App from './App'
import DevTools from './devtools/DevTools'

class Root extends React.Component {

  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          {/*<DevTools/>*/}
          <App isMotherMatched={this.props.isMotherMatched}/>
        </div>
      </Provider>
    )
  }
}

export default Root
