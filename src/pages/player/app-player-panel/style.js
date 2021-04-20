/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-23 17:51:23
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-23 17:56:33
 */

import styled from 'styled-components';

export const PanelWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 46px;
  transform: translateX(-50%);
  width: 986px;
  height: 301px;
  color: #e2e2e2;

  .main {
    position: relative;
    display: flex;
    height: 260px;
    overflow: hidden;
    background: url(${require("@/assets/img/playpanel_bg.png").default}) -1014px 0 repeat-y;

    .image {
      position: absolute;
      left: 2px;
      top: -360px;
      width: 980px;
      height: auto;
      opacity: .2;
    }
  }
`
