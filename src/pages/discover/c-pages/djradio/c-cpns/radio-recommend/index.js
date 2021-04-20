/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-26 16:40:40
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-29 15:44:23
 */

import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getRadioRecommend } from "../../store/actionCreators"

import { RecommendWrapper } from "./style"
import WSThemeHeaderNormal from '@/components/theme-header-normal'
import WSRadioRecomendCover from '@/components/radio-recommend-cover'

export default memo(function WSRadioRecommend() {
  // react-redux hooks
  const { currentId, recommends } = useSelector(state => ({
    currentId: state.getIn(["djradio", "currentId"]),
    recommends: state.getIn(["djradio", "recommends"])
  }), shallowEqual)
  const dispatch = useDispatch()

  // react hooks
  useEffect(() => {
    if (currentId === 0) return;
    dispatch(getRadioRecommend({type: currentId}));
  }, [dispatch, currentId])

  return (
    <RecommendWrapper>
        <WSThemeHeaderNormal title="优秀新电台" />
        <div className="radio-list">
          {
            recommends.slice(0, 5).map((item) => {
              return (<WSRadioRecomendCover info={item} key={item.id}/>)
            })
          }
        </div>
    </RecommendWrapper>
  )
})
