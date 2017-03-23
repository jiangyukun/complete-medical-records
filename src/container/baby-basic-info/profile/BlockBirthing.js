/**
 * 母乳喂养情况
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'

class BlockBirthing extends React.Component {
  render() {
    return (
      <Item className="item-padding">
        <IconNav iconClassName="block-birthing-icon"/>
        <ItemContent>
          <header>母婴阻断结果</header>
          <div className="content-item">
            <div className="mt-7">
              未知/成功/失败
            </div>
          </div>
        </ItemContent>
      </Item>
    )
  }
}

BlockBirthing.propTypes = {}

export default BlockBirthing
