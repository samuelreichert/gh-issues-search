import { memo } from 'react';
import Pagination from '../Pagination';
import SearchResultsItem from '../SearchResultsItem';
import SortResults from '../SortResults';
import LoadingResults from '../LoadingResults';
import { SearchResultsProps } from '../../config/types';
import './SearchResults.css';

const SearchResults = ({
  isLoading,
  results = [],
  sorting,
  totalPages,
  handlePageClick,
  onSelectSort,
}: SearchResultsProps) => (
  <div className='results-container'>
    <SortResults sorting={sorting} onSelectSort={onSelectSort} />

    {isLoading && <LoadingResults />}

    {results.length > 0 && results.map((item, i) => <SearchResultsItem {...item} key={i} />)}

    <Pagination totalPages={totalPages} handlePageClick={handlePageClick} />
  </div>
);

export default memo(SearchResults);
