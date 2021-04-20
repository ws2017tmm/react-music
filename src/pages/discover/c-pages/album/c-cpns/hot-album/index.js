/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-30 17:53:05
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-31 10:09:59
 */

import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getHotAlbumsAction } from '../../store/actionCreators'

import WSAlbumCover from '@/components/album-cover'
import WSThemHeaderNormal from '@/components/theme-header-normal'
import {
  HotAlbumWrapper
} from './style'

export default memo(function WSHotAlbum() {

  const { hotAlbums } = useSelector(state => ({
    hotAlbums: state.getIn(["album", "hotAlbums"])
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotAlbumsAction())
  }, [dispatch])

  return (
    <HotAlbumWrapper>
      <WSThemHeaderNormal title="热门新碟" />
      <div className="album-list">
        {
          hotAlbums.slice(0, 10).map(item => {
            return <WSAlbumCover size={130} 
                                 width={153} 
                                 bgp={"-845px"}
                                 key={item.id} 
                                 info={item}/>
          })
        }
      </div>
    </HotAlbumWrapper>
  )
})
