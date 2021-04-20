/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-24 16:33:45
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-25 10:07:11
 */

import React, { memo, shallowEqual, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classNames from "classnames"

import { getSizeImage } from "@/utils/format-utils"
import {
  getRanking, 
  changeCurrentTopRanking
} from "../../store/actionCreators"


import { TopRankingWrapper } from './style'

export default memo(function WSTopRanking() {
  // state and props
  const { topList, currentTopRanking } = useSelector(state => ({
    topList: state.getIn(["ranking", "topList"]),
    currentTopRanking: state.getIn(["ranking", "currentTopRanking"])
  }), shallowEqual)
  
  // react-redux hooks
  const dispatch = useDispatch()
  
  // react hooks
  useEffect(() => {
    const currentTop = topList[0]
    if (!currentTop) return
    dispatch(getRanking({id: currentTop.id}))
    dispatch(changeCurrentTopRanking(currentTop))
  }, [dispatch, topList])

  // handle function
  const hanldeItemClick = (currentTop) => {
    dispatch(changeCurrentTopRanking(currentTop))
    dispatch(getRanking({id: currentTop.id}))
  }

  return (
    <TopRankingWrapper>
      {
        topList.map((item, index) => {
          let header;
          if (index === 0 || index === 4) {
            header = <div className="header">{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</div>
          }
          return (
            <div key={item.id}>
              {header}
              <div className={classNames("item", { "active": item.id === currentTopRanking.id })}
                onClick={e => hanldeItemClick(item)}>
                <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="update">{item.updateFrequency}</div>
                </div>
              </div>
            </div>
          )
        })
      }
    </TopRankingWrapper>
  )
})
