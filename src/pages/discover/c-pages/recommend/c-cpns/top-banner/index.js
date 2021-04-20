/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-09 14:52:00
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-10 17:35:29
 */

import React, { 
  memo, 
  useState, 
  useEffect, 
  useRef, 
  useCallback 
} from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getTopBannerAction } from '../../store/actionCreator'

import { Carousel } from 'antd'
import {
  BannerWrapper, 
  BannerLeft, 
  BannerRight, 
  BannerControl
} from './style'

export default memo(function WSTopBanner() {
  // state
  const [currentIndex, setCurrentIndex] = useState(0)

  // 组件和redux关联: 获取数据和进行操作
  const { topBanners } = useSelector(state => ({
    // topBanners: state.get("recommend").get("topBanners")
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual)

  // 其他hooks
  const bannerRef = useRef()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  // 轮播图切换前调用的方法
  const bannerBeforeChange = useCallback(
    (from, to) => {
      setTimeout(() => {
        setCurrentIndex(to)
      }, 0);
    }, []
  )

  // 业务逻辑
  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")
  
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" 
                    autoplay
                    ref={bannerRef} 
                    beforeChange={bannerBeforeChange}>
            {
              topBanners.map(item => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight />
        <BannerControl>
          <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})