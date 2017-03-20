/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'
import {Provider} from 'react-redux'

import App from './App'

class Root extends React.Component {

  render() {
    return (
      <Provider store={this.props.store}>
        <App/>
      </Provider>
    )
  }
}

export default Root
