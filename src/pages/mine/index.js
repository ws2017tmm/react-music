/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-02-26 14:41:00
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-31 11:51:34
 */

import React, { memo } from 'react'

import { MineWrapper } from './style'

export default memo(function WSMine() {
  return (
    <MineWrapper>
      <div className="content wrap-v2">
        <div className="pic">
          <a className="login" href="/#">立即登录</a>
        </div>
      </div>
    </MineWrapper>
  )
})
