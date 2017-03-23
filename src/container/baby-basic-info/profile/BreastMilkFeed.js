/**
 * 母乳喂养情况
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'

class BreastMilkFeed extends React.Component {
  render() {
    return (
      <Item className="item-padding">
        <IconNav iconClassName="breast-milk-feed"/>
        <ItemContent>
          <header>母乳喂养情况</header>
          <div className="content-item">
            <div className="mt-7">
              未知/母乳喂养/混合喂养/奶粉喂养
            </div>
          </div>
        </ItemContent>
      </Item>
    )
  }
}

BreastMilkFeed.propTypes = {}

export default BreastMilkFeed
