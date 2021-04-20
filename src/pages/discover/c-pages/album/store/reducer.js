/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-30 17:53:05
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-30 17:57:09
 */

import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  hotAlbums: [],
  topAlbums: [],
  topTotal: 0
})

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_HOT_ALBUMS:
      return state.set("hotAlbums", action.hotAlbums)
    case actionTypes.CHANGE_TOP_ALBUMS:
      return state.set("topAlbums", action.topAlbums)
    case actionTypes.CHANGE_TOP_TOTAL:
      return state.set("topTotal", action.total)
    default:
      return state
  }
}
