/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-26 16:47:17
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-29 16:19:32
 */

import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  categories: [],
  currentId: 0,
  recommends: [],
  radios: [],
  currentPage: 1
})

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_RADIO_CATEGORY:
      return state.set("categories", action.categories)
    case actionTypes.CHANGE_CURRENT_ID:
      return state.set("currentId", action.currentId)
    case actionTypes.CHANGE_RECOMMENDS:
      return state.set("recommends", action.recommends)
    case actionTypes.CHANGE_RADIOS:
      return state.set("radios", action.radios)
    case actionTypes.CHANGE_CURRENT_PAGE:
      return state.set("currentPage", action.currentPage)
    default: 
      return state
  }
}

export default reducer