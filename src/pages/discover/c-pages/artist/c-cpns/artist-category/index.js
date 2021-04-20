/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-29 16:36:59
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-29 17:35:55
 */

import React, { memo } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import classNames from 'classnames'

import { artistCategories } from '@/common/local-data'
import { changeCurrentAreaAction, changeCurrentTypeAction } from '../../store/actionCreators'

import { CategoryWrapper, CategoryItem } from './style'


export default memo(function WSArtistCategory() {

  // redux hooks
  const {currentArea, currentType} = useSelector(state => ({
    currentArea: state.getIn(["artist", "currentArea"]),
    currentType: state.getIn(["artist", "currentType"])
  }), shallowEqual)
  const dispatch = useDispatch()

  // handle function
  const selectArtist = (area, type) => {
    dispatch(changeCurrentAreaAction(area))
    dispatch(changeCurrentTypeAction(type))
  }

  const renderArtist = (artists, area) => {
    return (
      <div>
        {
          artists.map(item => {
            const isSelect = currentArea === area && currentType.type === item.type
            return (
              <CategoryItem key={item.name} 
                            className={classNames({"active": isSelect})}>
                <span onClick={e => selectArtist(area, item)}>{item.name}</span>
              </CategoryItem>
            )
          })
        }
      </div>
    )
  }

  return (
    <CategoryWrapper>
      {
        artistCategories.map(item => {
          return (
            <div className="section" key={item.area}>
              <h2 className="title">{item.title}</h2>
              {renderArtist(item.artists, item.area)}
            </div>
          )
        })
      }
    </CategoryWrapper>
  )
})
