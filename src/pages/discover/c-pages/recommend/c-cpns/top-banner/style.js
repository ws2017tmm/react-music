/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-09 14:52:12
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-09 16:56:44
 */

import styled from 'styled-components'

export const BannerWrapper = styled.div`
  background: url(${props => props.bgImage}) center center/6000px;

  .banner {
    height: 270px;
    display: flex;
    position: relative;

    .slick-dots.slick-dots-bottom {
      li {
        width: 10px !important;
        height: 10px;
      }
      .slick-active {
        button {
          height: 100%;
          background: url(${require("@/assets/img/banner_sprite.png").default}) -20px -350px;
        }
      }
      button {
        height: 100%;
        background: url(${require("@/assets/img/banner_sprite.png").default}) 0 -350px;
      }
    }
  }
`

export const BannerLeft = styled.div`
  width: 730px;
  
  .banner-item {
    height: 270px;
    overflow: hidden;

    .image {
      width: 100%;
    }
  }
`

export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank"
})`
  width: 254px;
  height: 270px;
  background: url(${require("@/assets/img/download.png").default});
`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  
  .btn {
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/img/banner_sprite.png").default});
    background-color: transparent;
    cursor: pointer;

    position: absolute;
    
    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }
  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`