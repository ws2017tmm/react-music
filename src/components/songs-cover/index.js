/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-10 15:14:42
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-25 15:15:39
 */

import React, { memo } from 'react'

import { getCount, getSizeImage } from '@/utils/format-utils'

import { SongsCoverWrapper } from './style'

export default memo(function WSSongsCover(props) {
  const { item } = props
  return (
    <SongsCoverWrapper>
      <div className="image-box">
        <img src={getSizeImage(item.picUrl || item.coverImgUrl, 140)} alt={item.name} />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(item.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-name text-nowrap">{item.name}</div>
      <div className="cover-source text-nowrap">
        by {item.copywriter || item.creator.nickname}
      </div>
    </SongsCoverWrapper>
  )
})
