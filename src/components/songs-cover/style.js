/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-10 15:14:48
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-10 17:39:58
 */

import styled from 'styled-components'

export const SongsCoverWrapper = styled.div`
  width: 140px;
  margin: 20px ${props => (props.right || 0)} 20px 0;

  .image-box {
    position: relative;
    overflow: hidden;

    &>img {
      width: 140px;
      height: 140px;
    }

    .cover {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-position: 0 0;

      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-position: 0 -537px;
        color: #ccc;
        height: 27px;

        .erji {
          margin-right: 5px;
          display: inline-block;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
        }
        
        .play {
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0 0;
        }
      }
    }
  }

  .cover-name {
    color: #000;
    margin-top: 5px;
  }

  .cover-source {
    color: #666;
  }
  
`