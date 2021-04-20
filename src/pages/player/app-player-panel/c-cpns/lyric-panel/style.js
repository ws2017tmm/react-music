/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-23 17:58:22
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-24 11:07:18
 */

import styled from 'styled-components';

export const PannelWrapper = styled.div`
  position: relative;
  flex: 1;
  margin: 21px 0 20px 0;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  .lrc-content {
    .lrc-item {
      height: 32px;
      text-align: center;
      color: #989898;

      &.active {
        color: #fff;
        font-size: 14px;
      }
    }
  }

  
`