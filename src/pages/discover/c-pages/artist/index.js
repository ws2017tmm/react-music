/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-01 18:11:18
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-29 17:12:52
 */

import React, { memo } from 'react'

import WSArtistCategory from './c-cpns/artist-category'
import WSArtistList from './c-cpns/artist-list'
import { ArtistWrapper } from './style'

export default memo(function WSArtist() {
  return (
    <ArtistWrapper>
      <div className="content wrap-v2">
        <WSArtistCategory />
        <WSArtistList />
      </div>
    </ArtistWrapper>
  )
})
