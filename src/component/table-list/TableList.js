/**
 * Created by jiangyukun on 2017/3/21.
 */
import React from 'react'

import './table-list.scss'

class TableList extends React.Component {

  render() {
    return (
      <div className="table-list">
        {this.props.children}
      </div>
    )
  }
}

export default TableList
