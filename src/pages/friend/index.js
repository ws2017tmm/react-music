/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-02-26 14:41:00
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-02-26 14:42:09
 */

import React, { memo } from 'react'

import { FriendWrapper } from './style'

export default memo(function HYFriend() {
  return (
    <FriendWrapper>
      <div className="content wrap-v2">
        <div className="pic">
          <a className="login" href="/#">立即登录</a>
        </div>
      </div>
    </FriendWrapper>
  )
})
