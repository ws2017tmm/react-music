/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-24 17:55:39
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-25 10:09:36
 */
import React, {memo} from 'react'
import { useSelector, shallowEqual } from "react-redux"

import { formatMonthDay } from "@/utils/format-utils"

import HYSongOperationBar from '@/components/song-operation-bar'
import {
  RankingHeaderWrapper
} from './style'

export default memo(function HYRankingHeader() {
  // redux
  const { playList, currentTopRanking } = useSelector(state => ({
    playList: state.getIn(["ranking", "playList"]),
    currentTopRanking: state.getIn(["ranking", "currentTopRanking"])
  }), shallowEqual)
  
  return (
    <RankingHeaderWrapper>
      <div className="image">
        <img src={playList.coverImgUrl} alt="" />
        <span className="image_cover">封面</span>
      </div>
      <div className="info">
        <div className="title">{playList.name}</div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <div>最近更新：{formatMonthDay(playList.updateTime)}</div>
          <div className="update-f">（{currentTopRanking.updateFrequency}）</div>
        </div>
        <HYSongOperationBar favorTitle={`(${playList.subscribedCount})`}
                            shareTitle={`(${playList.shareCount})`}
                            downloadTitle="下载"
                            commentTitle={`(${playList.commentCount})`}/>
      </div>
    </RankingHeaderWrapper>
  )
})
