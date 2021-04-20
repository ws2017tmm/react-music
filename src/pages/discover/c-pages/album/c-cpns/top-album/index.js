/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-30 17:53:05
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-31 10:12:22
 */

import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getTopAlbumsAction } from '../../store/actionCreators'

import WSThemeHeaderNormal from "@/components/theme-header-normal"
import WSAlbumCover from "@/components/album-cover"
import WSPagination from '@/components/pagination'
import {
  TopAlbumWrapper
} from './style'

const PAGE_SIZE = 30

export default memo(function WSTopAlbum() {
  const [currentPage, setCurrentPage] = useState(1)

  const { topAlbums, total } = useSelector(state => ({
    topAlbums: state.getIn(["album", "topAlbums"]),
    total: state.getIn(["album", "topTotal"])
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    const params = {
      limit: PAGE_SIZE,
      offset: 0
    }
    dispatch(getTopAlbumsAction(params))
  }, [dispatch])

  const onPageChange = (page, pageSize) => {
    setCurrentPage(page)
    const params = {
      limit: PAGE_SIZE,
      offset: (page-1) * PAGE_SIZE
    }
    dispatch(getTopAlbumsAction(params))
  }

  return (
    <TopAlbumWrapper>
      <WSThemeHeaderNormal title="全部新碟" />
      <div className="album-list">
        {
          topAlbums.map((item, index) => {
            return <WSAlbumCover size={130} 
                                 width={153} 
                                 bgp={"-845px"}
                                 key={item.id} 
                                 info={item}/>
          })
        }
      </div>
      <WSPagination currentPage={currentPage} 
                    total={total} 
                    pageSize={30}
                    onPageChange={onPageChange}/>
    </TopAlbumWrapper>
  )
})
