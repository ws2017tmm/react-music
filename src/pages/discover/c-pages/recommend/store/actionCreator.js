/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-03 17:03:03
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-24 17:07:13
 */

import * as actionTypes from './constants';

import { 
  getTopBanners, 
  getHotRecommends, 
  getNewAlbums,
  getRecTopList, 
  getArtistList
 } from '@/services/api/discover'

// 轮播图数据
const changeTopBannerAction = res => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

// 热门推荐数据
const changeHotRecomendAction = res => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

// 新碟上架数据
const changeNewAlbumAction = res => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums
})

// 榜单数据 
// 飙升榜
const changeUpRankingAction = res => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist
})
// 新歌榜
const changeNewRankingAction = res => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})
// 原创榜
const changeOriginRankingAction = res => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})

// 入驻歌手
const changeSettleSingsAction = res => ({
  type: actionTypes.CHANGE_SETTLE_SONGER,
  settleSings: res.artists
})

/** -------------对外暴露------------- */
// 中间件
// 推荐-轮播图数据
export const getTopBannerAction = (params) => {
  return dispatch => {
    getTopBanners(params).then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}

// 推荐-热门推荐数据
export const getHotRecommendAction = (params) => {
  return dispatch => {
    getHotRecommends(params).then(res => {
      dispatch(changeHotRecomendAction(res))
    })
  }
}

// 推荐-新碟上架数据
export const getNewAlbumAction = (params) => {
  return dispatch => {
    getNewAlbums(params).then(res => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

// 推荐-榜单数据
export const getTopListAction = (params) => {
  return dispatch => {
    getRecTopList(params).then(res => {
      const idx = params.idx
      switch (idx) {
        case 0:
          dispatch(changeUpRankingAction(res))
          break;
        case 2:
          dispatch(changeNewRankingAction(res))
          break;
        case 3:
          dispatch(changeOriginRankingAction(res))
          break;
        default:
          break;
      }
    })
  }
}

// 推荐-入驻歌手数据
export const getSettleSingers = (params) => {
  return dispath => {
    getArtistList(params).then(res => {
      dispath(changeSettleSingsAction(res))
    })
  }
}

