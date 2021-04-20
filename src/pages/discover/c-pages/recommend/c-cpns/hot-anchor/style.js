/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-15 14:23:47
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-22 16:51:39
 */

import styled from "styled-components";

export const HotAnchorWrapper = styled.div`
  padding: 20px;

  .radio-list {
    margin-top: 20px;

    .item {
      display: flex;
      margin-bottom: 10px;
      width: 210px;
      .image {
        img {
          width: 40px;
          height: 40px;
        }
      }

      .info {
        width: 160px;
        margin-left: 8px;
        .name {
          color: #000;
          font-weight: 700;
          margin-top: 3px;
        }

        .position {
          color: #666;
        }
      }
    }
  }
`

