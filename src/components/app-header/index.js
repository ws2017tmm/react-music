/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-02-25 17:29:27
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-01 18:44:24
 */

import React, { memo } from 'react'

import { headerLinks } from '@/common/local-data'

import { NavLink } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from "antd";
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style'

export default memo(function WSAPPHeader() {
  
  // 页面代码
  const showSelectedItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }
  // 返回jsx
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">网易云音乐</a>
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="select-item">
                    {showSelectedItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />}/>
          <div className="center button">创作者中心</div>
          <div className="button">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
