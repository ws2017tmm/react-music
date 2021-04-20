/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-15 14:23:41
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-22 16:59:47
 */

import React, { memo } from 'react'

import { hotAnchors } from "@/common/local-data";

import { HotAnchorWrapper } from './style'
import WSThemeHeaderSmall from '@/components/theme-header-small'


export default memo(function WSHotAnchor() {
  return (
    <HotAnchorWrapper>
      <WSThemeHeaderSmall title="热门主播" />
      <div className="radio-list">
        {
          hotAnchors.map(item => {
            return (
              <div className="item" key={item.picUrl}>
                <a href="/abc" className="image">
                  <img src={item.picUrl} alt="" />
                </a>
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="position text-nowrap">{item.position}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </HotAnchorWrapper>
  )
})