/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-23 17:51:18
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-24 11:02:43
 */

import React, { memo } from 'react'

import { PanelWrapper } from './style'
import WSPlayHeader from './c-cpns/play-header'
import WSPlayList from './c-cpns/play-list'
import WSLyricPanel from './c-cpns/lyric-panel'

export default memo(function WSAppPlayerPanel() {
  return (
    <PanelWrapper>
      <WSPlayHeader />
      <div className="main">
        <img className="image" src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg" alt=""/>
        <WSPlayList />
        <WSLyricPanel />
      </div>
    </PanelWrapper>
  )
})
