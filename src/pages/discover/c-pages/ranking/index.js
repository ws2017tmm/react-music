/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-01 18:11:18
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-25 10:13:36
 */

import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getTops } from './store/actionCreators'

import {
  RankingWrapper,
  RankingLeft,
  RankingRight,
} from "./style"
import WSTopRanking from './c-cpns/top-ranking'
import WSRankingHeader from './c-cpns/ranking-header'
import WSRankingList from './c-cpns/ranking-list'


export default memo(function WSRanking() {
  // react-redux hooks
  const dispatch = useDispatch()

  // react hooks
  useEffect(() => {
    dispatch(getTops())
  }, [dispatch])

  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <WSTopRanking />
      </RankingLeft>
      <RankingRight>
        <WSRankingHeader/>
        <WSRankingList />
      </RankingRight>
    </RankingWrapper>
  )
})
