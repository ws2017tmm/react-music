/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-02-26 14:41:00
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-26 16:07:06
 */

import React, { memo } from 'react'

import { renderRoutes } from 'react-router-config'

import { NavLink } from 'react-router-dom'
import { dicoverMenu } from '@/common/local-data'

import { 
  DiscoverWrap, 
  TopMenu
} from './style'

export default memo(function WSDiscover(props) {
  const { route } = props;
  // const toRouter = (link) => {
  //   if (link.indexOf('/discover/songs') !== -1) {
  //     return link + '?cat=111'
  //   } else {
  //     return link
  //   }
  // }
  return (
    <DiscoverWrap>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            dicoverMenu.map(item => {
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrap>
  )
})
