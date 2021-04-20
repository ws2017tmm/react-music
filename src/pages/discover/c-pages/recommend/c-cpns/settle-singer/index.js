/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-15 14:25:25
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-22 16:49:41
 */

import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { getSettleSingers } from '../../store/actionCreator'
import { getSizeImage } from '@/utils/format-utils'

import { SetterSongerWrapper } from './style'
import WSThemeHeaderSmall from '@/components/theme-header-small'

export default memo(function WSSettleSinger(props) {
  // state and props
  const { settleSings } = useSelector(state => ({
    settleSings: state.getIn(["recommend", "settleSings"])
  }), shallowEqual)

  // react-redux hooks
  const dispatch = useDispatch()
  // react-router-dom
  const history = useHistory()

  // react hooks
  useEffect(() => {
    const params = {
      cat: 5001,
      limit: 5
    }
    dispatch(getSettleSingers(params))
  }, [dispatch])

  // handle function
  const itemClicked = () => {
    history.push('/singer')
  }

  return (
    <SetterSongerWrapper>
      <WSThemeHeaderSmall title="入驻歌手" more="查看更多>" />
      <div className="singer-list">
        {
          settleSings.map(item => {
            return (
              <div className="item" 
                   onClick={e => itemClicked()} 
                   key={item.id}>
                <img src={getSizeImage(item.img1v1Url, 62)} alt={item.name}/>
                <div className="info">
                  <div className="title">{item.alias.join("") || item.name}</div>
                  <div className="name">{item.name}</div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="apply-for">
        <a href="/abc">申请成为网易音乐人</a>
      </div>
    </SetterSongerWrapper>
  )
})
