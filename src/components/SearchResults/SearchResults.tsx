import { memo } from 'react';
import Select, { SingleValue } from 'react-select';
import SearchResultsItem from '../SearchResultsItem';
import './SearchResults.css';
import { SortOption } from './index';

type Props = {
  results?: [];
  sortOptions: SortOption[];
  onSelectSort: (newValue: SingleValue<SortOption>) => void;
  sorting?: SingleValue<SortOption>;
};

const SearchResults = ({
  results = [],
  sortOptions,
  onSelectSort,
  sorting
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
  </div>

export default memo(SearchResults);
