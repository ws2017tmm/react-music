/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-03 17:33:13
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-30 17:56:26
 */

import request from '../request';

/** --------------推荐-------------- */
export function getTopBanners() {
  return request({
    url: "/banner"
  })
}

export function getHotRecommends(params) {
  return request({
    url: "/personalized",
    params
  })
}

export function getNewAlbums(params) {
  return request({
    url: "/top/album",
    params
  })
}

export function getRecTopList(params) {
  return request({
    url: "/top/list",
    params
  })
}

export function getArtistList(params) {
  return request({
    url: "/artist/list",
    params
  })
}
/** --------------推荐-------------- */


/** --------------排行榜-------------- */
export function getTopList() {
  return request({
    url: "/toplist"
  })
}

// 获取榜单详情
export function getRankingList(params) {
  return request({
    url: "/playlist/detail",
    params
  })
}
/** --------------排行榜-------------- */


/** --------------歌单-------------- */
export function getSongCategory() {
  return request({
    url: "/playlist/catlist"
  })
}

export function getSongCategoryList(params) {
  return request({
    url: "/top/playlist",
    params
  })
}
/** --------------歌单-------------- */


/** --------------主播电台-------------- */
export function getDjRadioCatelist() {
  return request({
    url: "/dj/catelist"
  })
}

export function getDjRadioRecommend(params) {
  return request({
    url: "/dj/recommend/type",
    params
  })
}

export function getDjRadios(params) {
  return request({
    url: "/dj/radio/hot",
    params
  })
}
/** --------------主播电台-------------- */


/** --------------歌手-------------- */
export function getArtistLists(params) {
  let url = "/artist/list";
  params['limit'] = 100
  if (params.area === -1 && params.type === 1) {
    url = "/top/artists"
  } else {
    if (params.area === -1) {
      params = {limit: 100, cat: 5001}
    }
  }
  
  return request({
    url,
    params
  })
}
/** --------------歌手-------------- */


/** --------------新碟上架-------------- */
export function getHotAlbums() {
  return request({
    url: "/album/newest"
  })
}

export function getTopAlbums(params) {
  return request({
    url: "/top/album",
    params
  })
}
/** --------------新碟上架-------------- */