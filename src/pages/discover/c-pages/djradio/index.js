/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-01 18:11:18
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-29 16:29:59
 */

import React, { memo } from 'react'

import { DjRadioWrapper } from "./style"
import WSRadioCategory from './c-cpns/radio-category'
import WSRadioRecommend from './c-cpns/radio-recommend'
import WSRadioRanking from './c-cpns/radio-ranking'

export default memo(function WSDjradio() {
  return (
    <DjRadioWrapper className="wrap-v2">
      <WSRadioCategory />
      <WSRadioRecommend />
      <WSRadioRanking />
    </DjRadioWrapper>
  )
})
