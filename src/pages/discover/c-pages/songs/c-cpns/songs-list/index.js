/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-25 11:24:31
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-25 18:16:30
 */

import React, { memo, useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual } from "react-redux"

import { PER_PAGE_NUMBER } from '../../store/constants'
import { getSongList, changeCategoryListPageAction } from "../../store/actionCreators"


import {
  SongListWrapper
} from "./style"
import WSSongsCover from '@/components/songs-cover'
import WSPagination from '@/components/pagination'


export default memo(function WSSongsList() {
  // state and props
  // const [currentPage, setCurrentPage] = useState(1)
  
  // react-redux hooks
  const { categorySongs, currentPage } = useSelector(state => ({
    categorySongs: state.getIn(["songs", "categorySongs"]),
    currentPage: state.getIn(["songs", "currentPage"])
  }), shallowEqual)
  const songList = categorySongs.playlists || []
  const total = categorySongs.total || 0
  
  const dispatch = useDispatch()
  
  // handle function
  const onPageChange = useCallback((page, pageSize) => {
    dispatch(changeCategoryListPageAction(page))
    // setCurrentPage(page)
    
    // 分类对应的歌曲列表数据
    const params = {
      offset: page * PER_PAGE_NUMBER, // 第几页
      limit: PER_PAGE_NUMBER // 每页多少条数据
    }
    dispatch(getSongList(params))
  }, [dispatch])

  return (
    <SongListWrapper>
      <div className="songs-list">
        {
          songList.map(item => {
            return (
              <div className="list-item" key={item.id} >
                <WSSongsCover item={item} />
              </div>
            )
          })
        }
      </div>
      <WSPagination currentPage={currentPage} 
                    total={total} 
                    pageSize={PER_PAGE_NUMBER}
                    onPageChange={onPageChange} />
    </SongListWrapper>
  )
})
