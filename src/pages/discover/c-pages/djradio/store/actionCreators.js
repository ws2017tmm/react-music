/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-26 16:47:42
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-29 16:12:18
 */

import { 
  getDjRadioCatelist,
  getDjRadioRecommend,
  getDjRadios
} from "@/services/api/discover"
import * as actionTypes from './constants'

const changeCategoryAction = (res) => ({
  type: actionTypes.CHANGE_RADIO_CATEGORY,
  categories: res.categories
})

const changeRecommendsAction = (res) => ({
  type: actionTypes.CHANGE_RECOMMENDS,
  recommends: res.djRadios
})

const changeRadiosAction = (res) => ({
  type: actionTypes.CHANGE_RADIOS,
  radios: res.djRadios
})

export const changeCurrentIdActio = (id) => ({
  type: actionTypes.CHANGE_CURRENT_ID,
  currentId: id
})

export const getRadioCategories = () => {
  return dispatch => {
    getDjRadioCatelist().then(res => {
      dispatch(changeCategoryAction(res));
      const currentId = res.categories[0].id;
      dispatch(changeCurrentIdActio(currentId));
    })
  }
}

export const getRadioRecommend = (params) => {
  return dispatch => {
    getDjRadioRecommend(params).then(res => {
      dispatch(changeRecommendsAction(res));
    })
  }
}

export const getRadios = (params) => {
  return dispatch => {
    getDjRadios(params).then(res => {
      dispatch(changeRadiosAction(res));
    })
  }
}

export const changeCurrentPageNum = (page) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage: page
})