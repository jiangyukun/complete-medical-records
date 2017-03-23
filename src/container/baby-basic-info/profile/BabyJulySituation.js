/**
 * 宝宝7月情况
 * Created by jiangyukun on 2017/3/20.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'

class BabyJulySituation extends React.Component {
  render() {
    return (
      <Item className="item-padding">
        <IconNav iconClassName="baby-july-situation"/>
        <ItemContent>
          <header>宝宝7月情况</header>
          <div className="content-item">
            <div className="flex mt-7">
              <div className="flex1">
                <span>体重：2000g： </span>
              </div>
              <div className="flex1">
                <span>身高： 50.0 cm</span>
              </div>
            </div>

            <div className="mt-7">
              头围：18cm
            </div>
          </div>
        </ItemContent>
      </Item>
    )
  }
}

BabyJulySituation.propTypes = {}

export default BabyJulySituation
