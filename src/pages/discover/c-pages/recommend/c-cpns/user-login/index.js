/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-15 14:25:02
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-22 15:54:36
 */

import React, { memo } from 'react'

import { 
  UserLoginWrapper 
} from "./style";

export default memo(function WSUserLogin() {
  return (
    <UserLoginWrapper className="sprite_02">
      <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <a href="/login" className="sprite_02">用户登录</a>
    </UserLoginWrapper>
  )
})