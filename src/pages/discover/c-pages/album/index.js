/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-01 18:11:18
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-30 17:54:55
 */

import React, { memo } from 'react'

import WSHotAlbum from './c-cpns/hot-album'
import WSTopAlbum from './c-cpns/top-album'
import {
  AblumWrapper
} from './style'

export default memo(function WSAlbum() {
  return (
    <AblumWrapper className="wrap-v2">
      <WSHotAlbum/>
      <WSTopAlbum/>
    </AblumWrapper>
  )
})

