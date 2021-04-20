/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-01 17:33:13
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-01 18:43:59
 */

import styled from 'styled-components'

export const DiscoverWrap = styled.div`
  .top {
    height: 30px;
    background-color: #C20C0C;
  }
`
export const TopMenu = styled.div`
  display: flex;
  padding-left: 180px;
  position: relative;
  top: -4px;

  .item {
    a {
      display: inline-block;
      font-size: 12px;
      height: 20px;
      line-height: 20px;
      padding: 0 13px;
      margin: 7px 17px 0;
      color: #fff;

      &:hover, &.active {
        text-decoration: none;
        background-color: #9B0909;
        border-radius: 20px;
      }
    }

    
  }
`





