/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-15 16:19:41
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-23 17:21:01
 */

import request from '../request';

export function getSongDetail(params) {
  return request({
    url: "/song/detail",
    params
  })
}

export function getLyric(params) {
  return request({
    url: "/lyric",
    params
  })
}

/** --------------播放歌词页面-------------- */
export function getSimiPlaylist(params) {
  return request({
    url: "/simi/playlist",
    params
  })
}

export function getSimiSong(params) {
  return request({
    url: "/simi/song",
    params
  })
}
/** --------------播放歌词页面-------------- */