/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-01 18:11:18
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-31 11:41:55
 */

import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { 
  getCategory, 
  getSongList, 
  changeCurrentCategoryAction 
} from './store/actionCreators'
import { PER_PAGE_NUMBER } from './store/constants'


import {
  SongsWrapper
} from "./style"
import WSSongHeader from './c-cpns/songs-header'
import WSSongList from './c-cpns/songs-list'

export default memo(function WSSongs() {
  // state and props
  const { currentCategory } = useSelector(state => ({
    currentCategory: state.getIn(["songs", "currentCategory"])
  }))

  // react-router-dom hooks
  const location = useLocation()

  // react-redux hooks
  const dispatch = useDispatch()

  // react hooks
  useEffect(() => {
    dispatch(changeCurrentCategoryAction(location.cat || "全部"));
  }, [dispatch, location])

  useEffect(() => {
    // 分类数据
    dispatch(getCategory())
    
    // 分类对应的歌曲列表数据
    const params = {
      offset: 0 * PER_PAGE_NUMBER, // 第几页
      limit: PER_PAGE_NUMBER // 每页多少条数据
    }
    dispatch(getSongList(params))
  }, [currentCategory, dispatch])

  return (
    <SongsWrapper className="wrap-v2">
      <WSSongHeader />
      <WSSongList />
    </SongsWrapper>
  )
})
