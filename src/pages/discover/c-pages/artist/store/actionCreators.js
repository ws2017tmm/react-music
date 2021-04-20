/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-29 16:41:29
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-30 16:16:22
 */
import * as actionTypes from './constants'

import { getArtistLists } from '@/services/api/discover'

const changeArtistListAction = (artistList) => ({
  type: actionTypes.CHANGE_ARTIST_LIST,
  artistList
})

export const changeCurrentAreaAction = (area) => ({
  type: actionTypes.CHANGE_CURRENT_AREA,
  currentArea: area
});

export const changeCurrentTypeAction = (type) => ({
  type: actionTypes.CHANGE_CURRENT_TYPE,
  currentType: type
});

export const getArtistListAction = (parms) => {
  return dispatch => {
    getArtistLists(parms).then(res => {
      dispatch(changeArtistListAction(res.artists))
    })
  }
}