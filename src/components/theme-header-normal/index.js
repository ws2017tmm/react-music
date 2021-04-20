/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-29 15:30:58
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-29 15:34:03
 */
import React, {memo} from 'react'

import { HeaderWrapper } from "./style"

export default memo(function WSThemeHeaderNormal(props) {
  const { title, rightSlot } = props

  return (
    <HeaderWrapper>
      <div className="title">{title}</div>
      <div className="right">
        {rightSlot}
      </div>
    </HeaderWrapper>
  )
})
