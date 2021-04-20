/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-24 16:33:50
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-24 17:18:57
 */

import styled from 'styled-components'

export const TopRankingWrapper = styled.div`
  padding: 25px 0;

  .header {
    padding: 12px 12px 10px;
    font-size: 14px;
    color: #000;
    font-family: simsun;
  }

  .item {
    height: 62px;
    padding-left: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    
    &:hover, &.active {
      background-color: #e6e6e6;
    }

    img {
      width: 40px;
      height: 40px;
    }

    .info {
      margin-left: 10px;

      .name {
        color: #000;
      }

      .update {
        margin-top: 5px;
        color: #999;
      }
    }
  }
`