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
  sorting?: SingleValue<SortOption>;
  setSorting: (newValue: SingleValue<SortOption>) => void;
  link?: string | null;
  page?: number;
  setPage: (page: any) => void;
};

const sortOptions: SortOption[] = [
  { label: 'Newest', value: '&sort=created&direction=desc' },
  { label: 'Oldest', value: '&sort=created&direction=asc' },
  { label: 'Most commented', value: '&sort=comments&direction=desc' },
  { label: 'Least commented', value: '&sort=comments&direction=asc' },
  { label: 'Recently updated', value: '&sort=updated&direction=desc' },
  { label: 'Least recently', value: '&sort=updated&direction:asc' },
];

const SearchResultsContainer = ({
  results,
  isLoading,
  isError,
  notFoundMessage,
  sorting,
  setSorting,
  link,
  page,
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
      sortOptions={sortOptions}
      onSelectSort={onSelectSort}
      sorting={sorting}
      totalPages={totalPages}
      handlePageClick={handlePageClick}
      page={page}
    />
  );
};

export default SearchResultsContainer;
