/**
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'
import {getText, isEmpty} from '../../../helper/utils'

class ProfileQueueComplete extends React.Component {

  render() {
    const {motherBasicInfo} = this.props
    const baseInfo = motherBasicInfo['baseInfo'] || {}
    const isYesOrUnknown = isEmpty(baseInfo['completed']) || baseInfo['completed'] == '是'

    return (
      <Item className="item-padding">
        <IconNav iconClassName="profile-icon-5"/>
        <ItemContent>
          <header>队列完成情况</header>
          {
            isYesOrUnknown && (
              <div className="content-item">
                <div>
                  <span>是否完成队列： {getText(baseInfo['completed'])}</span>
                </div>
              </div>
            )
          }
          {
            !isYesOrUnknown && (
              <div className="content-item">
                <div>
                  <span>是否完成队列： {getText(baseInfo['completed'])}</span>
                </div>
                <div className="mt-7">
                  <span>没有完成队列日期： {getText(baseInfo['not_Completed_Date'])}</span>
                </div>
                <div className="mt-7">
                  <span>没有完成队列原因： {getText(baseInfo['not_Completed_Reason'])}</span>
                </div>
              </div>
            )
          }
        </ItemContent>

      </Item>
    )
  }
}

ProfileQueueComplete.propTypes = {
  motherBasicInfo: React.PropTypes.object
}

export default ProfileQueueComplete
