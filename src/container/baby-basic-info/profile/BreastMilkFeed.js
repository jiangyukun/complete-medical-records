/**
 * 母乳喂养情况
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'
import {getText} from '../../../helper/utils'

class BreastMilkFeed extends React.Component {
  render() {
    const {babyBasicInfo} = this.props

    return (
      <Item className="item-padding">
        <IconNav iconClassName="breast-milk-feed"/>
        <ItemContent>
          <header>母乳喂养情况</header>
          <div className="content-item">
            <div className="mt-7">
              {getText(babyBasicInfo['breast_Feed'])}
            </div>
          </div>
        </ItemContent>
      </Item>
    )
  }
}

BreastMilkFeed.propTypes = {}

export default BreastMilkFeed
