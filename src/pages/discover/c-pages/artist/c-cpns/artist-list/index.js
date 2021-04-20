/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-29 16:36:59
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-30 11:33:10
 */

import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'


import WSThemeHeaderNormal from '@/components/theme-header-normal'
import WSAlphaList from './c-cpns/alpha-list'
import WSArtistItem from './c-cpns/artist-item'
import {
  ArtistListWrapper
} from './style'

export default memo(function WSArtistList() {
  // redux hooks
  const { currentType, artistList } = useSelector(state => ({
    currentType: state.getIn(["artist", "currentType"]),
    artistList: state.getIn(["artist", "artistList"])
  }), shallowEqual)
  
  return (
    <ArtistListWrapper>
      <WSThemeHeaderNormal title={currentType.name} />
      <WSAlphaList/>
      <div className="artist-list">
        {
          artistList.map((item, index) => {
            if (index === 10) {
              return <div key={index} className="line"></div>
            }
            return <WSArtistItem key={item.id} index={index} info={item}/>
          })
        }
      </div>
    </ArtistListWrapper>
  )
})

