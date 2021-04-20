/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-26 16:40:40
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-29 16:22:56
 */

import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getRadios, changeCurrentPageNum } from "../../store/actionCreators"

import WSThemeHeaderNormal from '@/components/theme-header-normal'
import WSRadioRankingCover from '@/components/radio-ranking-cover'
import WSPagination from '@/components/pagination'
import { RankingWraper } from "./style"

export default memo(function WSRadioRanking() {
  // react-redux hooks
  const { 
    currentId, 
    radios, 
    currentPage 
  } =  useSelector(state => ({
    currentId: state.getIn(["djradio", "currentId"]),
    radios: state.getIn(["djradio", "radios"]),
    currentPage: state.getIn(["djradio", "currentPage"]),
  }), shallowEqual)
  const dispatch = useDispatch()

  // react hooks
  useEffect(() => {
    if (currentId === 0) return;
    const params = {
      cateId: currentId,
      limit: 30,
      offset: 1
    }
    dispatch(getRadios(params))
  }, [dispatch, currentId])

  // hanlde function
  const onPageChange = (page, pageSize) => {
    dispatch(changeCurrentPageNum(page))
    
    const params = {
      cateId: currentId,
      limit: 30,
      offset: page * 30
    }
    dispatch(getRadios(params))
  }

  return (
    <RankingWraper>
      <WSThemeHeaderNormal title="电台排行榜"/>
      <div className="ranking-list">
        {
          radios.map(item => {
            return (<WSRadioRankingCover key={item.id} radio={item}/>)
          })
        }
      </div>
      <WSPagination currentPage={currentPage} 
                    total={1000} 
                    pageSize={30}
                    onPageChange={onPageChange}/>
    </RankingWraper>
  )
})
