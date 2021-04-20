/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-26 16:40:49
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-29 15:21:03
 */

import styled from 'styled-components';

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -40px;

  .category-page {
    display: flex !important;
    flex-wrap: wrap;
    padding-bottom: 20px;

    .category-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 35px;
      margin-bottom: 25px;
      width: 70px;
      height: 70px;
      font-size: 12px;
      cursor: pointer;
      border-radius: 5px;
      text-align: center;
      border: 2px solid transparent;

      :hover {
        background-color: #eee;
      }

      &.active {
        color: #C20C0C;
        border: 2px solid #d35757;

        .image {
          background-position: -48px 0;
        }
      }
    }
  }

  
`

export const CategoryItemImage = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${props => props.imgUrl});
`