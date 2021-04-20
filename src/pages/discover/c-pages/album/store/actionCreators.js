/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-30 17:53:05
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-31 10:06:34
 */

import * as actionTypes from './constants'

import {
  getHotAlbums,
  getTopAlbums
} from '@/services/api/discover'

const changeHotAlbumsAction = (res) => ({
  type: actionTypes.CHANGE_HOT_ALBUMS,
  hotAlbums: res.albums
})

const changeTopAlbumAction = (res) => ({
  type: actionTypes.CHANGE_TOP_ALBUMS,
  topAlbums: res.albums
})

const changeTopTotalAction = (total) => ({
  type: actionTypes.CHANGE_TOP_TOTAL,
  total: total
})

export const getHotAlbumsAction = () => {
  return dispatch => {
    getHotAlbums().then(res => {
      dispatch(changeHotAlbumsAction(res));
    })
  }
}

export const getTopAlbumsAction = (params) => {
  return dispatch => {
    getTopAlbums(params).then(res => {
      dispatch(changeTopAlbumAction(res))
      dispatch(changeTopTotalAction(res.total))
    })
  }
}
