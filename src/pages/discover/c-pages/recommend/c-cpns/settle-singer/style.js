/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-15 14:25:41
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-22 16:39:50
 */
import styled from "styled-components";

export const SetterSongerWrapper = styled.div`
  padding: 20px;

  .singer-list {
    .item {
      display: flex;
      height: 62px;
      margin-top: 14px;
      background-color: #fafafa;
      text-decoration: none;
      cursor: pointer;

      :hover {
        background-color: #f4f4f4;
      }

      img {
        width: 62px;
        height: 62px;
      }

      .info {
        margin: 8px 0 0 10px;
        .title {
          color: #333;
          font-size: 14px;
          font-weight: 700;
        }

        .name {
          margin-top: 5px;
        }
      }
    }
  }

  .apply-for {
    margin-top: 12px;
    a {
      color: #333;
      font-weight: 700;
      text-align: center;
      display: block;
      height: 31px;
      line-height: 31px;
      border-radius: 4px;
      background-color: #fafafa;
      border: 1px solid #c3c3c3;
      text-decoration: none;
    }
  }
`
