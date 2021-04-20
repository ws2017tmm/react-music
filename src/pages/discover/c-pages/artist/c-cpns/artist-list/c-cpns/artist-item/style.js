/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-29 17:54:35
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-30 11:26:09
 */
import styled from 'styled-components'

export const ItemWrapper = styled.div`
  width: 130px;
  margin-top: 15px;

  .image {
    img {
      width: 130px;
      height: 130px;
    }
  }

  .info {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;

    &.info-text {
      justify-content: start;
      align-items: center;

      .name {
        margin-right: 5px;
      }
    }

    .name {
      cursor: pointer;
      
      &:hover {
        color: red;
        text-decoration: underline;
      }
    }

    .icon {
      display: inline-block;
      width: 17px;
      height: 18px;
      background-position: 0 -740px;
    }
  }

`