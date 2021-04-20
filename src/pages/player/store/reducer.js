/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-15 15:04:50
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-24 15:32:52
 */

import { Map } from 'immutable'
import * as actionTypes from './constants'
import { SEQUENCE } from '@/common/constants'

const defaultState = Map({
  currentSong: {},
  isPlaying: false,
  playList: [],
  currentIndex: 0,
  sequence: SEQUENCE.LOOP, // 0 循环 1 随机 2 单曲
  lyricList: [],
  currentLyricIndex: 0,
  simiPlaylist: [],
  simiSongs: [],
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong)
    case actionTypes.CHANGE_PLAYING_STATE:
      return state.set("isPlaying", action.isPlaying)
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList)
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentIndex", action.index)
    case actionTypes.CHANGE_SEQUENCE:
      return state.set("sequence", action.sequence)
    case actionTypes.CHANGE_LYRIC_LIST:
      return state.set("lyricList", action.lyricList)
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricIndex", action.lyricIndex)
    case actionTypes.CHANGE_SIMI_PLAYLIST:
      return state.set("simiPlaylist", action.simiPlaylist)
    case actionTypes.CHANGE_SIMI_SONGS:
      return state.set("simiSongs", action.simiSongs)
    default:
      return state
  }
}

export default reducer