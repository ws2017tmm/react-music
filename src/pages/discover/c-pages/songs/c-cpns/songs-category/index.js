/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-25 11:24:03
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-26 11:24:49
 */

import React, { memo } from 'react'
import { useSelector, useDispatch, shallowEqual } from "react-redux"

import { PER_PAGE_NUMBER } from '../../store/constants'
import {
  changeCurrentCategoryAction,
  changeCategoryListPageAction,
  getSongList
} from "../../store/actionCreators"


import { CategoryWrapper } from "./style"

export default memo(function WSSongsCategory(props) {
  // state and props
  const { itemClicked } = props

  // react-redux hooks
  const { category } = useSelector(state => ({
    category: state.getIn(["songs", "category"])
  }), shallowEqual)
  const dispatch = useDispatch()
  
  // handle function
  const selectCategory = (name) => {
    dispatch(changeCurrentCategoryAction(name))
    dispatch(changeCategoryListPageAction(1))
    
    
    
    // 分类对应的歌曲列表数据
    const params = {
      offset: 0, // 第几页
      limit: PER_PAGE_NUMBER // 每页多少条数据
    }
    dispatch(getSongList(params))
    
    // 调用父组件方法
    itemClicked()
  }
  
  return (
    <CategoryWrapper>
      <div className="arrow sprite_icon"></div>
      <div className="all">
        <span className="link" onClick={e => selectCategory("全部")}>全部风格</span>
      </div>
      <div className="category">
        {
          category.map((item, index) => {
            return (
              <dl key={item.name} className={"item" + index}>
                <dt>
                  <i className="icon sprite_icon2"></i>
                  <span>{item.name}</span>
                </dt>
                <dd>
                  {
                    item.subs.map(sItem => {
                      return (
                        <div className="item" key={sItem.name}>
                          <span className="link" onClick={e => selectCategory(sItem.name)}>{sItem.name}</span>
                          <span className="divider">|</span>
                        </div>
                      )
                    })
                  }
                </dd>
              </dl>
            )
          })
        }
      </div>
    </CategoryWrapper>
  )
})
