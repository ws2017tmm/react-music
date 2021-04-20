/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-10 10:24:54
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-31 11:35:13
 */

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { HeaderWrapper } from './style'

function WSRecommendHeader(props) {
  const { title, keywords, moreLink, keywordClick } = props
  
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keywords">
          {
            keywords.map(item => {
              return (
                <div className="item" key={item}>
                  <span className="link" 
                        onClick={e => keywordClick(item)}>{item}</span>
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
          <Link to={moreLink}>更多</Link>
          <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
}

WSRecommendHeader.prototype = {
  title: PropTypes.string.isRequired,
  moreLink: PropTypes.string,
  keywords: PropTypes.array
}

WSRecommendHeader.defaultProps = {
  moreLink: '/#',
  keywords: []
}

export default memo(WSRecommendHeader)