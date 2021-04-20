/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-15 14:59:01
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-22 17:29:19
 */

import React, { memo } from 'react'


import {
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from './style'
import WSPlayerInfo from './c-cpns/player-info'
import WSPlayerComment from './c-cpns/player-comment'
import WSPlayerSongs from './c-cpns/player-songs'
import WSPlayerRelevant from './c-cpns/player-relevant'

export default memo(function WSPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <WSPlayerInfo />
          <WSPlayerComment />
        </PlayerLeft>
        <PlayerRight>
          <WSPlayerSongs />
          <WSPlayerRelevant />
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
