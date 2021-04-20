/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-22 17:15:48
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-23 17:10:24
 */

import styled from 'styled-components';

export const PlayerSongsWrapper = styled.div`
  .songs {
    .song-item {
      display: flex;
      align-items: center;
      margin-top: 15px;
      width: 200px;

      .image {
        width: 50px;
        height: 50px;
      }

      .info {
        margin-left: 10px;
        .name {
          font-size: 14px;
          color: #000;
        }

        .auchor {
          color: #999;

          .nickname {
            color: #666;
            margin-left: 5px;
          }
        }
      }
    }
  }
`