import { useEffect, useState } from 'react';
import SearchResults from './SearchResults';
import ErrorResults from '../ErrorResults';
import {
  HandlePageClickArgs,
  SearchResultsContainerProps,
  Sorting
} from '../../config/types';

const SearchResultsContainer = ({
  isError,
  isLoading,
  notFoundMessage,
  link,
  results,
  searched,
  sorting,
  setPage,
  setSorting,
}: SearchResultsContainerProps) => {
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (link) {
      const lastLink = link.substring(0, link.indexOf('rel="last"'));
      const pageQueryParam = '?page=';
      const start = lastLink.lastIndexOf(pageQueryParam) + pageQueryParam.length;
      const total = lastLink.substring(start, lastLink.lastIndexOf('&'));

      setTotalPages(parseInt(total))
    }
  }, [link, setTotalPages])


  const handlePageClick = ({ selected }: HandlePageClickArgs) => {
    setPage(selected + 1);
  };

  const onSelectSort = (newValue: Sorting) => {
    setSorting(newValue);
    setPage(1);
  };

  if (isError || notFoundMessage === 'Not Found') {
    return <ErrorResults />;
  }

  if (!searched) return null;

  return (
    <SearchResults
      results={results}
      onSelectSort={onSelectSort}
      sorting={sorting}
      totalPages={totalPages}
      handlePageClick={handlePageClick}
      isLoading={isLoading}
    />
  );
};

export default SearchResultsContainer;
