/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-29 17:54:35
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-30 17:48:27
 */
import React, { memo, useState, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import classNames from 'classnames'

import { singerAlphas } from '@/utils/handle-data'
import { getArtistListAction } from '../../../../store/actionCreators'

import {
  AlphaListWrapper
} from './style'

export default memo(function WSAlphaList() {
  const [currentAlpha, setCurrentAlpha] = useState("-1")

  const { currentType, currentArea } = useSelector(state => ({
    currentType: state.getIn(["artist", "currentType"]),
    currentArea: state.getIn(["artist", "currentArea"])
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    setCurrentAlpha("-1")
  }, [currentType, currentArea])

  useEffect(() => {
    let alpha = ''
    if (currentAlpha === '热门') {
      alpha = '-1'
    } else if (currentAlpha === '其他') {
      alpha = '0'
    } else {
      alpha = currentAlpha
    }
    const params = {
      area: currentArea,
      type: currentType.type,
      initial: alpha
    }
    dispatch(getArtistListAction(params))
  }, [currentAlpha, currentType, currentArea, dispatch])

  return (
    <AlphaListWrapper hasTop={currentArea !== -1}>
      {
        currentArea !== -1 && singerAlphas.map(item => {
          const isActive = currentAlpha === item
          if (item === "0") item = "其他"
          if (item === "-1") item = "热门"
          return (
            <div key={item}
                 className={classNames("item", {"active": isActive})}>
              <span onClick={e => setCurrentAlpha(item)}>{item.toUpperCase()}</span>
            </div>
          )
        })
      }
    </AlphaListWrapper>
  )
})
