import { memo } from 'react';
import Select, { SingleValue } from 'react-select';
import ReactPaginate from 'react-paginate';
import SearchResultsItem from '../SearchResultsItem';
import './SearchResults.css';
import { SortOption, HandlePageClickArgs } from './index';

type Props = {
  results?: [];
  sortOptions: SortOption[];
  onSelectSort: (newValue: SingleValue<SortOption>) => void;
  sorting?: SingleValue<SortOption>;
  totalPages: number;
  handlePageClick: (click: HandlePageClickArgs) => void;
  page?: number;
};

const SearchResults = ({
  results = [],
  sortOptions,
  onSelectSort,
  sorting,
  totalPages,
  handlePageClick,
  page,
}: Props) =>
  <div className='results-container'>
    <div className='sort-container'>
      <Select
        className='sort-select'
        classNamePrefix='select'
        defaultValue={sorting}
        isClearable={false}
        name='sort'
        options={sortOptions}
        onChange={onSelectSort}
      />
    </div>

    {results.map((item, i) => <SearchResultsItem item={item} key={i} />)}

    <div className='pagination'>
      <ReactPaginate
        initialPage={(page ?? 1) - 1}
        pageRangeDisplayed={5}
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
  </div>

export default memo(SearchResults);
