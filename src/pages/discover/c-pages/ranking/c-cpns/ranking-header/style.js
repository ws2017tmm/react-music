/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-24 17:55:39
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-25 10:11:45
 */
import styled from "styled-components"

export const RankingHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 40px;
  font-size: 12px;

  .image {
    padding: 3px;
    border: 1px solid #ccc;
    position: relative;

    img {
      width: 150px;
      height: 150px;
    }

    .image_cover {
      background-position: -230px -380px;
    }
  }

  .info {
    margin-left: 30px;
    
    .title {
      color: #333;
      font-size: 20px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    }

    .time {
      display: flex;
      align-items: center;
      color: #666;
      margin: 8px 0 30px;

      .clock {
        display: inline-block;
        width: 13px;
        height: 13px;
        background-position: -18px -682px;
        position: relative;
        top: -2px;
        margin-right: 3px;
      }

      .update-f {
        color: #999;
      }
    }
  }
`