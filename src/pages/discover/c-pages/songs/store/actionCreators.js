/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-25 11:22:28
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-25 18:13:35
 */

import * as actionTypes from './constants'

import {
  getSongCategory,
  getSongCategoryList
} from "@/services/api/discover"
import { handleSongsCategory } from "@/utils/handle-data"

// 分类
const changeCategoryAction = (res) => ({
  type: actionTypes.CHANGE_CATEGORY,
  category: res
})

// 分类对应的数据
const changeSongListAction = (res) => ({
  type: actionTypes.CHANGE_CATEGORY_SONGS,
  categorySongs: res
})


/** -----------对外暴露----------- */
// 获取分类数据
export const getCategory = () => {
  return dispatch => {
    getSongCategory().then(res => {
      const categoryData = handleSongsCategory(res)
      dispatch(changeCategoryAction(categoryData))
    })
  }
}

// 获取当前分类下歌曲数据
export const getSongList = (params) => {
  return (dispatch, getState) => {
    // 当前分类
    const name = getState().getIn(["songs", "currentCategory"]);
    params['cat'] = name
    // 获取数据
    getSongCategoryList(params).then(res => {
      dispatch(changeSongListAction(res));
    })
  }
}

// 当前分类
export const changeCurrentCategoryAction = (name) => ({
  type: actionTypes.CHANGE_CURRENT_CATEGORY,
  currentCategory: name
})

// 当前分类列表的页码
export const changeCategoryListPageAction = (page) => ({
  type: actionTypes.CHANGE_CATEGORY_LIST_PAGE,
  currentPage: page
})



