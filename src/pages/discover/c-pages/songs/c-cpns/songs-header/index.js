/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-25 11:24:21
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-25 17:13:06
 */

import React, { memo, useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from "./style"
import WSSongsCategory from '../songs-category'


export default memo(function WSSongsHeader() {

  // react hooks
  const [showCategory, setShowCategory] = useState(false)

  // react-redux redux
  const { currentCategory } = useSelector(state => ({
    currentCategory: state.getIn(["songs", "currentCategory"])
  }), shallowEqual)

  const categoryClicked = () => {
    setShowCategory(false)
  }
  
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <span className="title">{currentCategory}</span>
        <button className="select" 
                onClick={e => setShowCategory(!showCategory)}>
          <span>选择分类</span>
          <i className="sprite_icon2"></i>
        </button>
        {showCategory ? <WSSongsCategory itemClicked={categoryClicked} /> : null}
      </HeaderLeft>
      <HeaderRight>
        <button className="hot">热门</button>
      </HeaderRight>
    </HeaderWrapper>
  )
})