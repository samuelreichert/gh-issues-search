import { memo } from 'react';
import ReactPaginate from 'react-paginate';
import { PaginationProps } from '../../config/types';
import './style.css';

const Pagination = ({ totalPages, handlePageClick }: PaginationProps) => (
  <div className='pagination'>
    <ReactPaginate
      pageRangeDisplayed={3}
      pageCount={totalPages}
      onPageChange={handlePageClick}
      pageClassName='pagination__list-item'
      previousClassName='pagination__list-item pagination__list-item--prev-next'
      nextClassName='pagination__list-item pagination__list-item--prev-next'
      breakClassName='pagination__list-item'
      activeClassName='pagination__list-item--active'
      disabledClassName='pagination__list-item--disabled'
      disabledLinkClassName='pagination__link--disabled'
    />
  </div>
);

export default memo(Pagination);
