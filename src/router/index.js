/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-02-26 14:43:37
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-26 16:06:33
 */

import React from 'react'
import { Redirect } from 'react-router-dom'

// import WSDiscover from '@/pages/discover'
// import WSRecommend from '@/pages/discover/c-pages/recommend'
// import WSRanking from '@/pages/discover/c-pages/ranking'
// import WSSongs from '@/pages/discover/c-pages/songs'
// import WSDjradio from '@/pages/discover/c-pages/djradio'
// import WSArtist from '@/pages/discover/c-pages/artist'
// import WSAlbum from '@/pages/discover/c-pages/album'

const WSDiscover = React.lazy(() => import("@/pages/discover"))
const WSRecommend = React.lazy(_ => import("@/pages/discover/c-pages/recommend"))
const WSRanking = React.lazy(_ => import("@/pages/discover/c-pages/ranking"))
const WSSongs = React.lazy(_ => import("@/pages/discover/c-pages/songs"))
const WSDjradio = React.lazy(_ => import("@/pages/discover/c-pages/djradio"))
const WSArtist = React.lazy(_ => import("@/pages/discover/c-pages/artist"))
const WSAlbum = React.lazy(_ => import("@/pages/discover/c-pages/album"))

const WSPlayer = React.lazy(_ => import("../pages/player"))

const WSMine = React.lazy(_ => import("@/pages/mine"))
const WSFriend = React.lazy(_ => import("@/pages/friend"))


const routers = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: "/discover",
    component: WSDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend"/>
        )
      },
      {
        path: "/discover/recommend",
        component: WSRecommend
      },
      {
        path: "/discover/ranking",
        component: WSRanking
      },
      {
        path: "/discover/songs",
        component: WSSongs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: WSDjradio
      },
      {
        path: "/discover/artist",
        component: WSArtist
      },
      {
        path: "/discover/album",
        component: WSAlbum
      },
      {
        path: "/discover/player",
        component: WSPlayer
      }
    ]
  },
  {
    path: "/mine",
    component: WSMine
  },
  {
    path: "/friend",
    component: WSFriend
  },
]

export default routers