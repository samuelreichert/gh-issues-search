import { memo } from 'react';
import SearchResultsItem from '../SearchResultsItem';
import './SearchResults.css';

type Props = {
  results?: [];
};

const SearchResults = ({ results = [] }: Props) =>
  <div className='results-container'>
    {results.map((item, i) => <SearchResultsItem item={item} key={i} />)}
  </div>

export default memo(SearchResults);
