/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-15 15:03:23
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-24 15:29:06
 */

import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { SEQUENCE } from '@/common/constants'
import { getSizeImage, formatMinuteSecond,  getPlaySong } from '@/utils/format-utils';
import { 
  getSongDetailAction, 
  changePlayingStateAction, 
  changeSongSequence, 
  changeNextSongAction, 
  changeCurrentLyricIndexAction
} from '../store/actionCreators'

import { 
  PlayBarWrapper, 
  Control, 
  PlayInfo,
  Operator
} from './style'

import { Slider, message } from 'antd'
import WSAppPlayerPanel from '../app-player-panel'


export default memo(function WSAppPlayerBar() {

  // state and props
  // 歌曲当前播放时间
  const [ currentTime, setCurrentTime ] = useState(0)
  // 歌曲当前播放进度
  const [ progress, setProgress ] = useState(0)
  // 是否正在滑动 
  const [ isChanging, setIsChanging ] = useState(false)
  // 歌曲当前是否正在播放
  // const [ isPlaying, setIsPlaying ] = useState(false)
  // 是否展示播放面板
  const [showPanel, setShowPanel] = useState(false);

  // 当前播放的歌曲
  const { 
    currentSong,
    playList,
    isPlaying, 
    sequence, 
    lyricList,
    currentLyricIndex
  } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    playList: state.getIn(["player", "playList"]),
    isPlaying: state.getIn(["player", "isPlaying"]),
    sequence: state.getIn(["player", "sequence"]),
    lyricList: state.getIn(["player", "lyricList"]),
    currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
  }), shallowEqual)
  
  // react-redux hooks
  const dispatch = useDispatch()
  
  // react hooks
  useEffect(() => {
    const params = {ids:188429}
    dispatch(getSongDetailAction(params))
  }, [dispatch])
  const audioRef = useRef()
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
    audioRef.current.play().then(() => {
      dispatch(changePlayingStateAction(true))
      // setIsPlaying(true)
    }).catch(() => {
      dispatch(changePlayingStateAction(false))
      // setIsPlaying(false)
    })
  }, [currentSong, dispatch])
  
  // handle data
  // 歌曲对应的图片
  const picUrl = (currentSong.al && currentSong.al.picUrl) || ""
  // 歌手名字
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手"
  const duration = currentSong.dt || 0;
  // 歌曲总时长
  const showDuration = formatMinuteSecond(duration)
  // 歌曲正在播放的时间
  const showCurrentTime = formatMinuteSecond(currentTime)
  
  // handle function

  // 播放
  // const playMusic = useCallback(() => {
  //   setIsPlaying(!isPlaying);
  //   let playing = isPlaying
  //   playing = !playing
  //   playing ? audioRef.current.play() : audioRef.current.pause();
  // },[isPlaying])
  const playMusic = useCallback(() => {
    dispatch(changePlayingStateAction(!isPlaying))
    // setIsPlaying(!isPlaying)
  },[dispatch, isPlaying])
  // useState 是异步更新，配合useEffect一起使用
  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying])
  
  // 上\下一首
  const changeMusic = (tag) => {
    dispatch(changeNextSongAction(tag))
  }

  // 监听播放的时间 -> 改变进度条
  const timeUpdate = (e) => {
    // 单位：秒
    if (!isChanging) {
      const currentTime = e.target.currentTime;
      setCurrentTime(currentTime * 1000)
      const progress = currentTime * 1000 / duration * 100
      setProgress(progress)
    }

    // 获取当前的歌词
    let i = 0
    for (; i < lyricList.length; i++) {
      const lyricItem = lyricList[i];
      if (currentTime < lyricItem.time) {
        break;
      }
    }
    // 只有当 当前的歌词所对应的index不同时，才去操作redux
    // 真正的歌词所对应的index应是 i-1
    const realIndex = i-1
    if (currentLyricIndex !== realIndex) {
      dispatch(changeCurrentLyricIndexAction(realIndex))
      const content = lyricList[realIndex] && lyricList[realIndex].content
      content && message.open({
        key: "lyric",
        content: content,
        duration: 0,
        className: "lyric-class"
      })
    }
  }

  // 拖动滑块
  const sliderChange = useCallback((value) => {
    setIsChanging(true)
    setCurrentTime(value / 100 * duration)
    setProgress(value)
  },[duration])

  // 停止拖动的那一刻
  const sliderAfterChange = useCallback((value) => {
    const currentTime = value / 100 * duration;
    audioRef.current.currentTime = currentTime / 1000
    setCurrentTime(currentTime)
    setIsChanging(false)
    if (!isPlaying) {
      playMusic()
    }
  },[duration, isPlaying, playMusic])

  // 切换播放模式
  const changeSequence = () => {
    let currentSequence = sequence + 1
    if (currentSequence > SEQUENCE.SINGLE) {
      currentSequence = SEQUENCE.LOOP
    }
    dispatch(changeSongSequence(currentSequence))
  }
  
  // 播放完毕的处理
  const handleMusicEnded = () => {
    // 当前的播放模式
    if (sequence === SEQUENCE.SINGLE) { // 单曲循环
      audioRef.current.currentTime = 0
      audioRef.current.play()
    } else {
      dispatch(changeNextSongAction(1))
    }
  }
  
  return (
    <PlayBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev"
                  onClick={e => changeMusic(-1)}></button>
          <button className="sprite_player play"
                  onClick={e => playMusic()}></button>
          <button className="sprite_player next" 
                  onClick={e => changeMusic(1)}></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl, 34)} alt="tupian" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="#/" className="singer-name">{singerName}</a>
            </div>
            <div className="progress">
              <Slider defaultValue={0} 
                      tooltipVisible={false}
                      value={progress} 
                      onChange={sliderChange} 
                      onAfterChange={sliderAfterChange} />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop" 
                    onClick={e => changeSequence()}></button>
            <button className="sprite_player btn playlist"
                    onClick={e => setShowPanel(!showPanel)}>
              {playList.length}
            </button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} 
             onTimeUpdate={e => timeUpdate(e)} 
             onEnded={e => handleMusicEnded()}></audio>
      {showPanel && <WSAppPlayerPanel />}
    </PlayBarWrapper>
  )
})
