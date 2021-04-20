/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-01 18:11:18
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-15 14:53:11
 */

import React, { memo } from 'react'

import {
  RecommendWrapper, 
  Content,
  RecommendLeft,
  RecommendRight
} from './style'
import WSTopBanner from './c-cpns/top-banner'
import WSHotRecommend from './c-cpns/hot-recommend'
import WSNewAlbum from './c-cpns/new-album'
import WSRecommendRanking from './c-cpns/recommend-ranking'
import WSUserLogin from './c-cpns/user-login'
import WSSettleSinger from './c-cpns/settle-singer'
import WSHotAnchor from './c-cpns/hot-anchor'

function WSRecommend(props) {
  return (
    <RecommendWrapper>
      <WSTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <WSHotRecommend />
          <WSNewAlbum />
          <WSRecommendRanking />
        </RecommendLeft>
        <RecommendRight>
          <WSUserLogin />
          <WSSettleSinger />
          <WSHotAnchor />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

export default memo(WSRecommend)



// function WSRecommend(props) {
//   const { getBanners, topBanners } = props
//   useEffect(() => {
//     getBanners()
//   }, [getBanners])
  
//   return (
//     <div>
//       <h1>WSRecommend: {topBanners.length}</h1>
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => {
//   return {
//     getBanners: () => {
//       dispatch(getTopBannerAction)
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(memo(WSRecommend))
