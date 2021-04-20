/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-10 10:25:01
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-12 15:44:55
 */

 import styled from 'styled-components'

 export const NewAlbumWrapper = styled.div`
  margin-top: 30px;
 `

export const NewAlbumContent = styled.div`
  height: 186px;
  background-color: #f5f5f5;
  border: 1px solid #d3d3d3;
  margin: 20px 0 37px;
  
  display: flex;
  align-items: center;
  
  .arrow {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  
  .arrow-left {
    background-position: -260px -75px;
  }

  .arrow-right {
    background-position: -300px -75px;
  }

  .album {
    width: 640px;
    height: 150px;

    .page {
      display: flex !important;
      justify-content: space-between;
      align-items: center;
    }
  }
`

