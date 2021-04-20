/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-29 16:39:07
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-30 11:33:33
 */

import styled from 'styled-components'

export const ArtistListWrapper = styled.div`
  flex: 1;
  padding: 40px;

  .artist-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    padding: 5px 0 40px;

    .line {
      width: 100%;
      margin-top: 20px;
      border-bottom: 1px dotted #999;
    }
  }
`