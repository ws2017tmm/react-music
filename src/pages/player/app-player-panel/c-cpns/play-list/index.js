/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-23 17:58:15
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-24 11:05:44
 */

import React, { memo } from 'react'

import { useSelector, shallowEqual } from 'react-redux'
import classNames from 'classnames'

import { formatMinuteSecond } from '@/utils/format-utils'

import { PlayListWrapper } from './style'

export default memo(function WSPlayList() {
  const { playList, currentIndex } = useSelector(state => ({
    playList: state.getIn(["player", "playList"]),
    currentIndex: state.getIn(["player", "currentIndex"])
  }), shallowEqual)

  return (
    <PlayListWrapper>
      {
        playList.map((item, index) => {
          return (
            <div key={item.id}
                 className={classNames("play-item", {"active": currentIndex === index})}>
              <div className="left">{item.name}</div>
              <div className="right">
                <span className="singer">{item.ar[0].name}</span>
                <span className="duration">{formatMinuteSecond(item.dt)}</span>
                <span className="sprite_playlist link"></span>
              </div>
            </div>
          )
        })
      }
    </PlayListWrapper>
  )
})