/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-26 16:40:40
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-29 16:30:20
 */

import React, { useEffect, memo } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import classnames from 'classnames'

import {
  getRadioCategories, 
  changeCurrentIdActio,
  changeCurrentPageNum
} from '../../store/actionCreators'

import {
  CategoryWrapper,
  CategoryItemImage
} from "./style";


export default memo(function WSRadioCategory() {

  // react-redux hooks
  const { 
    categories, 
    currentId
   } = useSelector(state => ({
    categories: state.getIn(["djradio", "categories"]),
    currentId: state.getIn(["djradio", "currentId"]),
  }), shallowEqual);
  
  const dispatch = useDispatch()
  // react hooks
  useEffect(() => {
    dispatch(getRadioCategories())
  }, [dispatch])

  // handle function
  const itemClicked = (id) => {
    dispatch(changeCurrentIdActio(id))
    dispatch(changeCurrentPageNum(1))
  }
  
  return (
    <CategoryWrapper>
      <div className="category-page">
        {
          categories.map(item => {
            return (
              <div key={item.id} 
                   onClick={e => itemClicked(item.id)}
                   className={classnames("category-item", {"active": currentId === item.id})}>
                <CategoryItemImage className="image" imgUrl={item.picWebUrl}></CategoryItemImage>
                <span>{item.name}</span>
              </div>
            )
          })
        }
      </div>
    </CategoryWrapper>
  )
})
