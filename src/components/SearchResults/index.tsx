import { SingleValue } from 'react-select';
import SearchResults from './SearchResults';
import LoadingResults from '../LoadingResults';
import ErrorResults from '../ErrorResults';

export type SortOption = {
  label: string;
  value: string;
};

type Props = {
  results?: [];
  isLoading: boolean;
  isError: boolean;
  notFoundMessage: string;
  refetch: () => void;
  sorting?: SingleValue<SortOption>;
  setSorting: (newValue: SingleValue<SortOption>) => void;
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
}: Props) => {
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

  return <SearchResults
    results={results}
    sortOptions={sortOptions}
    onSelectSort={onSelectSort}
    sorting={sorting}
  />;
};

export default SearchResultsContainer;
