/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-25 11:21:53
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-25 12:06:12
 */

import { Map } from "immutable"
import * as actionTypes from "./constants"

const defaultState = Map({
  category: [],
  currentCategory: "全部",
  categorySongs: {},
  currentPage: 1
})

 const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_CATEGORY:
      return state.set("category", action.category)
    case actionTypes.CHANGE_CURRENT_CATEGORY:
      return state.set("currentCategory", action.currentCategory)
    case actionTypes.CHANGE_CATEGORY_SONGS:
      return state.set("categorySongs", action.categorySongs)
    case actionTypes.CHANGE_CATEGORY_LIST_PAGE:
      return state.set("currentPage", action.currentPage)
    default:
      return state
  }
}

export default reducer