/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-23 17:58:15
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-24 10:49:19
 */

import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'


import { 
  HeaderWrapper, 
  HeaderLeft, 
  HeaderRight
 } from './style'

export default memo(function WSPlayHeader() {
  const { playList, currentSong } = useSelector(state => ({
    playList: state.getIn(["player", "playList"]),
    currentSong: state.getIn(["player", "currentSong"])
  }), shallowEqual)

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <h3>播放列表({playList.length})</h3>
        <div className="operator">
          <button>
            <i className="sprite_playlist icon favor"></i>
            收藏全部
          </button>
          <button>
            <i className="sprite_playlist icon remove"></i>
            清除
          </button>
        </div>
      </HeaderLeft>
      <HeaderRight>
        {currentSong.name}
      </HeaderRight>
    </HeaderWrapper>
  )
})
