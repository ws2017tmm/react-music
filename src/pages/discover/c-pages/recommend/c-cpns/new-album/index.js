/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-10 10:24:54
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-31 11:44:33
 */

import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getNewAlbumAction } from '../../store/actionCreator'

import { Carousel } from 'antd'
import WSRecommendHeader from '@/components/recommend-header'
import WSAlbumCover from '@/components/album-cover'
import { NewAlbumWrapper, NewAlbumContent } from './style'

export default memo(function WSNewAlbum() {
  // state
  // react-redux
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual)
  const dispatch = useDispatch()

  // redux
  useEffect(() => {
    dispatch(getNewAlbumAction({limit: 10}))
  }, [dispatch])

  const pageRef = useRef()

  return (
    <NewAlbumWrapper>
      <WSRecommendHeader title="新碟上架" moreLink="/discover/album"/>
      <NewAlbumContent>
        <button className="arrow arrow-left sprite_02"
                onClick={e => pageRef.current.prev()}></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {
              [0, 1].map(item => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbums.slice(item * 5, (item + 1) * 5).map(val => {
                        return (
                          <WSAlbumCover info={val} 
                                        size={100}
                                        width={118}
                                        bgp="-570px"
                                        key={val.id} />
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02"
                onClick={e => pageRef.current.next()}></button>
      </NewAlbumContent>
    </NewAlbumWrapper>
  )
})
