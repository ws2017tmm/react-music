/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-25 10:20:10
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-25 10:20:26
 */
import React from 'react';
import { useSelector, shallowEqual } from "react-redux";

import {
  HeaderWrapper
} from "./style"
import { memo } from 'react';

export default memo(function WSThemeHeaderSong() {
  // redux
  const state = useSelector(state => ({
    playList: state.getIn(["ranking", "playList"])
  }), shallowEqual)

  return (
    <HeaderWrapper>
      <div className="left">
        <h3 className="title">歌曲列表</h3>
        <div className="count">{state.playList.trackCount}首歌</div>
      </div>
      <div className="right">
        <span>播放：</span>
        <span className="count">{state.playList.playCount}</span>
        <span>次</span>
      </div>
    </HeaderWrapper>
  )
})
