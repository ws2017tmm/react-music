/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-10 10:24:54
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-31 11:11:01
 */

import React, { memo, useEffect, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { getHotRecommendAction } from '../../store/actionCreator'

import { HotRecommendWrapper } from './style'
import WSRecommendHeader from '@/components/recommend-header'
import WSSongsCover from '@/components/songs-cover'

export default memo(function WSHotRecommend() {
  // state

  // react-redux hooks
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual)

  const dispatch = useDispatch()
  const history = useHistory()

  // react hooks
  useEffect(() => {
    const params = {
      limit: 8
    }
    dispatch(getHotRecommendAction(params))
  }, [dispatch])
  
  // handle function
  const keywordClicked = useCallback((keyword) => {
    history.push({
      pathname: "/discover/songs",
      cat: keyword
    })
  }, [history])
  
  return (
    <HotRecommendWrapper>
      <WSRecommendHeader title="热门推荐" 
                         keywords={["华语", "流行", "民谣", "摇滚", "电子"]} 
                         keywordClick={keywordClicked} 
                         moreLink="/discover/songs" />
      <div className="recommend-list">
        {
          hotRecommends.map(item => {
            return (
              <WSSongsCover item={item} key={item.id} />
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
