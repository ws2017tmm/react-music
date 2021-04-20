/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-10 10:24:54
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-31 11:47:18
 */

import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getTopListAction } from '../../store/actionCreator'


import WSRecommendHeader from '@/components/recommend-header'
import WSTopRanking from '@/components/top-ranking'
import { RankingWrapper } from './style'

export default memo(function WSRecommendRanking() {

  // react-redux hooks
  const dispatch = useDispatch()
  const data = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"])
  }))
  const { upRanking, newRanking, originRanking } = data
  
  // react hooks
  useEffect(() => {
    dispatch(getTopListAction({idx: 3})) // 飙升榜
    dispatch(getTopListAction({idx: 0})) // 新歌榜
    dispatch(getTopListAction({idx: 2})) // 原创榜
  }, [dispatch])
  
  return (
    <RankingWrapper>
      <WSRecommendHeader title="榜单" moreLink="/discover/ranking" />
      <div className="top-list">
        <WSTopRanking info={upRanking} />
        <WSTopRanking info={newRanking} />
        <WSTopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  )
})
