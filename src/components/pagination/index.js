/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-25 15:42:02
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-31 10:14:21
 */
import React, { memo } from 'react';

import { Pagination } from 'antd';
import { PaginationWrapper } from './style';

export default memo(function WSPagination(props) {
  const { currentPage, total, onPageChange } = props;

  // render function
  function itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <button className="control prev"> &lt; 上一页</button>;
    }
    if (type === 'next') {
      return <button className="control next">下一页 &gt;</button>;
    }
    return originalElement;
  }
  
  return (
    <PaginationWrapper>
      <Pagination className="pagination"
        size="small"
        current={currentPage}
        defaultCurrent={1}
        total={total}
        pageSize={35}
        showSizeChanger={false}
        itemRender={itemRender}
        onChange={onPageChange} />
    </PaginationWrapper>
  )
})
