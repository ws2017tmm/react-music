/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-29 17:54:35
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-30 11:27:58
 */

import React, { memo } from 'react'
import className from 'classnames'

import { getSizeImage } from '@/utils/format-utils'

import { ItemWrapper } from './style'

export default memo(function WSArtistItemV1(props) {
  const { info, index } = props

  return (
    <ItemWrapper>
      {
        index < 10 && (
          <div className="image">
            <img src={getSizeImage(info.img1v1Url, 130)} alt="" />
          </div>
        )
      }
      <div className={className("info",  {"info-text": index>=10})}>
        <span className="name">{info.name}</span>
        <i className="sprite_icon2 icon"></i>
      </div>
    </ItemWrapper>
  )
})
