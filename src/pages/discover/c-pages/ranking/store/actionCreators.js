/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-24 16:39:20
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-25 09:53:06
 */
import * as actionTypes from "./constants"

import { 
  getTopList,
  getRankingList
} from "@/services/api/discover"

const changeTopListAction = (res) => ({
  type: actionTypes.CHANGE_TOP_LIST,
  topList: res.list
})

const changePlayListAction = (res) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList: res.playlist
})


/** ---------对外暴露--------- */
// 左边榜单的数据
export const getTops = () => {
  return dispatch => {
    getTopList().then(res => {
      dispatch(changeTopListAction(res));
    })
  }
}

// 右边榜单对应的歌曲数据
export const getRanking = (params) => {
  return dispatch => {
    getRankingList(params).then(res => {
      dispatch(changePlayListAction(res));
    })
  }
}

export const changeCurrentTopRanking = (currentTopRanking) => ({
  type: actionTypes.CHANGE_CURRENT_TOP_RANKING,
  currentTopRanking
}) 

