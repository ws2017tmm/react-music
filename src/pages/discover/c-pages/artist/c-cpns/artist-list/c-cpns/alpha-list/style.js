/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-29 17:54:35
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-29 17:56:03
 */
import styled from 'styled-components'

export const AlphaListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${props => props.hasTop ? "20px": 0};

  .item {
    padding: 1px 4px;
    border-radius: 3px;
    span {
      font-size: 14px;
      color: #333;
      cursor: pointer;
    }

    span:hover {
      text-decoration: underline;
    }
  }

  .active {
    background-color: #c20c0c;
    span {
      color: #fff;
    }
  }
`