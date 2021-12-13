import { useEffect, useState } from 'react';
import { SingleValue } from 'react-select';
import SearchResults from './SearchResults';
import LoadingResults from '../LoadingResults';
import ErrorResults from '../ErrorResults';

export type HandlePageClickArgs = {
  selected: number;
}

export type SortOption = {
  label: string;
  value: string;
};

type Props = {
  results?: [];
  isLoading: boolean;
  isError: boolean;
  notFoundMessage: string;
  sorting?: SortOption;
  setSorting: (newValue: SingleValue<SortOption>) => void;
  link?: string | null;
  setPage: (page: any) => void;
};

const SearchResultsContainer = ({
  results,
  isLoading,
  isError,
  notFoundMessage,
  sorting,
  setSorting,
  link,
  setPage,
}: Props) => {
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

  const onSelectSort = (newValue: SingleValue<SortOption>) => {
    setSorting(newValue);
  };

  if (isLoading) {
    return <LoadingResults />;
  }

  if (isError || notFoundMessage === 'Not Found') {
    return <ErrorResults />;
  }

  if (!results) return null;

  return (
    <SearchResults
      results={results}
      onSelectSort={onSelectSort}
      sorting={sorting}
      totalPages={totalPages}
      handlePageClick={handlePageClick}
    />
  );
};

export default SearchResultsContainer;
