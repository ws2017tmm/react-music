/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-31 15:01:09
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-31 15:01:23
 */

import styled from 'styled-components'

export const FriendWrapper = styled.div`
  .content {
    background-color: #fff;
    min-height: 700px;

    .pic {
      position: relative;
      width: 807px;
      height: 484px;
      margin: 0 auto;
      background: url(${require("@/assets/img/friend_sprite.jpg").default}) 0 104px no-repeat;

      .login {
        position: absolute;
        width: 167px;
        height: 45px;
        left: 482px;
        top: 368px;
        text-indent: -9999px;
      }
    }
  }
`