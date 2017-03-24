/**
 * Created by jiangyukun on 2017/3/23.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'

class DeliverTime extends React.Component {
  render() {
    return (
      <Item>
        <IconNav iconClassName="baby-deliver-time"/>
        <ItemContent>
          <header>分娩时间</header>
          <div className="content-item">
            <div className="mt-7">
              {this.props.deliverTime}
            </div>
          </div>
        </ItemContent>
      </Item>
    )
  }
}

DeliverTime.propTypes = {
  deliverTime: React.PropTypes.string
}

export default DeliverTime
