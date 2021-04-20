/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-15 15:05:18
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-24 14:17:46
 */

import * as actionTypes from './constants'
import { 
  getSongDetail, 
  getLyric, 
  getSimiPlaylist, 
  getSimiSong 
} from '@/services/api/player'
import { SEQUENCE } from '@/common/constants'
import { getRandomNumber } from '@/utils/math-utils'
import { parseLyric } from '@/utils/parse-lyric'

const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong
})

const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList
})

const changeCurrentSongIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index
})

const changLyricListAction = (lyricList) => ({
  type: actionTypes.CHANGE_LYRIC_LIST,
  lyricList
})

const getLyricData = (params) => {
  return dispatch => {
    getLyric(params).then(res => {
      const lyric = res.lrc.lyric;
      const lyricList = parseLyric(lyric);
      dispatch(changLyricListAction(lyricList));
    })
  }
}

const changeSimiPlaylistAction = (res) => ({
  type: actionTypes.CHANGE_SIMI_PLAYLIST,
  simiPlaylist: res.playlists
})

const changeSimiSongsAction = (res) => ({
  type: actionTypes.CHANGE_SIMI_SONGS,
  simiSongs: res.songs
})


/** --------------对外暴露-------------- */
// 改变当前歌词所对应的index
export const changePlayingStateAction = (isPlaying) => ({
  type: actionTypes.CHANGE_PLAYING_STATE,
  isPlaying
})

// 请求歌曲信息
export const getSongDetailAction = (params) => {
  return (dispatch, getState) => {
    /** 判断当前歌曲是否在播放列表中 */
    // 1.获取当前播放列表和当前歌曲的index
    const playList = getState().getIn(["player", "playList"])
    // 2.查找是否包含该歌曲
    const ids = params.ids
    const songIndex = playList.findIndex(song => song.id === ids)
    // 3.判断
    if (songIndex !== -1) { // 包含该歌曲
      // 改变当前正在播放的歌曲
      dispatch(changeCurrentSongIndexAction(songIndex))
      const song = playList[songIndex]
      dispatch(changeCurrentSongAction(song))
      
      // 请求歌词
      dispatch(getLyricData({id: song.id}))
    } else { // 不包含该歌曲
      // 发送网络请求
      getSongDetail(params).then(res => {
        const song = res.songs && res.songs[0]
        if (!song) return;
        
        // 1.将最新请求到的歌曲添加到播放列表中
        const newPlayList = [...playList]
        newPlayList.push(song)
        // 2.更新redux中的值
        dispatch(changePlayListAction(newPlayList))
        dispatch(changeCurrentSongIndexAction(newPlayList.length-1))
        dispatch(changeCurrentSongAction(song))

        // 请求歌词
        dispatch(getLyricData({id: song.id}))
      })
    }
  }
}

// 改变歌曲的播放顺序
export const changeSongSequence = (sequence) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence
})

// 播放下一首歌曲
export const changeNextSongAction = (tag) => {
  return (dispatch, getState) => {
    // 播放列表
    const playList = getState().getIn(["player", "playList"])
    // 播放顺序
    const sequence = getState().getIn(["player", "sequence"])
    // 当前播放歌曲的index
    let currentSongIndex = getState().getIn(["player", "currentIndex"])
    switch (sequence) {
      case SEQUENCE.RANDOM: // 随机播放
        if (playList.length !== 1) {
          let randomIndex = currentSongIndex
          while (randomIndex === currentSongIndex) {
            randomIndex = getRandomNumber(playList.length)
          }
          currentSongIndex = randomIndex
        }
        break;
    
      default: // 循环播放
        currentSongIndex += tag
        if (currentSongIndex >= playList.length) {
          currentSongIndex = 0
        }
        if (currentSongIndex < 0) {
          currentSongIndex = playList.length - 1;
        }
        break;
    }
    const currentSong = playList[currentSongIndex]
    dispatch(changeCurrentSongAction(currentSong))
    dispatch(changeCurrentSongIndexAction(currentSongIndex))

    // 请求歌词
    const params = {id: currentSong.id}
    getLyricData(params)
  }
}

// 改变当前歌词所对应的index
export const changeCurrentLyricIndexAction = (lyricIndex) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  lyricIndex
})

export const getSimiPlaylistAction = () => {
  return (dispatch, getState) => {
    const id = getState().getIn(["player", "currentSong"]).id;
    if (!id) return;

    getSimiPlaylist({id}).then(res => {
      dispatch(changeSimiPlaylistAction(res));
    })
  }
}

export const getSimiSongAction = () => {
  return (dispatch, getState) => {
    const id = getState().getIn(["player", "currentSong"]).id;
    if (!id) return;

    getSimiSong({id}).then(res => {
      dispatch(changeSimiSongsAction(res));
    })
  }
}





