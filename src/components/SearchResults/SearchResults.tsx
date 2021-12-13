import { memo } from 'react';
import { SingleValue } from 'react-select';
import Pagination from '../Pagination';
import SearchResultsItem from '../SearchResultsItem';
import SortResults from '../SortResults';
import { SortOption, HandlePageClickArgs } from './index';
import './SearchResults.css';

type Props = {
  results?: [];
  sorting?: SortOption;
  totalPages: number;
  handlePageClick: (click: HandlePageClickArgs) => void;
  onSelectSort: (newValue: SingleValue<SortOption>) => void;
};

const SearchResults = ({
  results = [],
  sorting,
  totalPages,
  handlePageClick,
  onSelectSort,
}: Props) => (
  <div className='results-container'>
    <SortResults sorting={sorting} onSelectSort={onSelectSort} />

    {results.map((item, i) => <SearchResultsItem {...item} key={i} />)}

    <Pagination totalPages={totalPages} handlePageClick={handlePageClick} />
  </div>
);

export default memo(SearchResults);
