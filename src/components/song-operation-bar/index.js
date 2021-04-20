/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-22 17:36:08
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-23 17:05:51
 */

import React, { memo } from 'react';
import { useDispatch } from 'react-redux'

import { changePlayingStateAction } from '@/pages/player/store'

import { OperationBarWrapper } from './style';

export default memo(function WSSongOperationBar(props) {
  const { favorTitle, shareTitle, downloadTitle, commentTitle } = props

  const dispatch = useDispatch()
  const playMusic = () => {
    dispatch(changePlayingStateAction(true))
  }

  return (
    <OperationBarWrapper>
      <div className="play">
        <div className="play-icon sprite_button"
             onClick={e => playMusic()}>
          <span className="play sprite_button">
            <i className="sprite_button"></i>
            <span>播放</span>
          </span>
        </div>
        <a href="/abc" className="add-icon sprite_button">+</a>
      </div>
      <a href="/abc" className="item sprite_button">
        <i className="icon favor-icon sprite_button">{favorTitle}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon share-icon sprite_button">{shareTitle}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon download-icon sprite_button">{downloadTitle}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon comment-icon sprite_button">{commentTitle}</i>
      </a>
    </OperationBarWrapper>
  )
})
