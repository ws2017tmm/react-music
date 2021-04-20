/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-03 16:04:10
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-30 18:06:25
 */

import { combineReducers } from 'redux-immutable'

import {reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store'
import { reducer as rankingReducer } from "../pages/discover/c-pages/ranking/store"
import { reducer as songsReducer } from "../pages/discover/c-pages/songs/store"
import { reducer as djradioReducer } from "../pages/discover/c-pages/djradio/store"
import { reducer as artistReducer } from "../pages/discover/c-pages/artist/store"
import { reducer as albumReducer } from "../pages/discover/c-pages/album/store"
import {reducer as playerReducer } from '../pages/player/store'

const combineReducer = combineReducers({
  recommend: recommendReducer,
  ranking: rankingReducer,
  songs: songsReducer,
  djradio: djradioReducer,
  artist: artistReducer,
  album: albumReducer,
  player: playerReducer
})

export default combineReducer