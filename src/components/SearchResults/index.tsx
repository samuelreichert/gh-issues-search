import SearchResults from './SearchResults';
import LoadingResults from '../LoadingResults';
import ErrorResults from '../ErrorResults';

type Props = {
  results?: [];
  isLoading: boolean;
  isError: boolean;
  notFoundMessage: string;
};

const SearchResultsContainer = ({
  results,
  isLoading,
  isError,
  notFoundMessage,
}: Props) => {
  if (isLoading) {
    return <LoadingResults />;
  }

  if (isError || notFoundMessage === 'Not Found') {
    return <ErrorResults />;
  }

  if (!results) return null;

  return <SearchResults results={results} />;
};

export default SearchResultsContainer;
