/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-24 16:38:57
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-24 16:44:32
 */

import { Map } from "immutable";
import * as actionTypes from './constants';

const defaultState = Map({
  topList: [],
  currentTopRanking: {},
  playList: {}
})

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_TOP_LIST:
      return state.set("topList", action.topList);
    case actionTypes.CHANGE_CURRENT_TOP_RANKING:
      return state.set("currentTopRanking", action.currentTopRanking);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    default:
      return state;
  }
}

export default reducer