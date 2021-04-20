/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-15 14:25:07
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-22 15:56:56
 */

import styled from 'styled-components'

export const UserLoginWrapper = styled.div`
  font-size: 12px;
  height: 126px;
  padding: 16px 22px;
  background-position: 0 0;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    line-height: 25px;
  }

  a {
    margin-top: 10px;
    display: inline-block;
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    text-decoration: none;
    background-position: 0 -195px;
    text-shadow: 0 1px 0 #8a060b;

    :hover {
      background-position: -110px -195px;
    }
  }
`