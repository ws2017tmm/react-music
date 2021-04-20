/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-22 16:01:36
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-22 16:03:04
 */
import React, { memo } from 'react';
import PropTypes from 'prop-types';

import {
  HeaderWrapper
} from "./style";

const WSThemeHeaderSmall = memo(function (props) {
  const { title, more } = props;

  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      <a href="/abc">{more}</a>
    </HeaderWrapper>
  )
})

WSThemeHeaderSmall.defaultProps = {
  title: "标题"
}

WSThemeHeaderSmall.propTypes = {
  title: PropTypes.string.isRequired,
  more: PropTypes.string
}

export default WSThemeHeaderSmall;
