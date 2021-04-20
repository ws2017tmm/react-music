/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-02-25 15:26:11
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-22 14:18:41
 */

import React, { memo, Suspense } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

import routers from '@/router'
import store from '@/store'

import { HashRouter } from 'react-router-dom'
import WSAPPHeader from '@/components/app-header'
import WSAPPFooter from '@/components/app-footer'
import WSAppPlayerBar from '@/pages/player/app-player-bar'


export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <WSAPPHeader />
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routers)}
        </Suspense>
        <WSAPPFooter/>
        <WSAppPlayerBar />
      </HashRouter>
    </Provider>
  )
})

