import { SingleValue } from 'react-select';
import SearchHeader from '../SearchHeader';
import SearchResults, {SortOption} from '../SearchResults';
import './SearchGitHubIssues.css';

type Props = {
  isError: boolean;
  isLoading: boolean;
  link?: string | null;
  notFoundMessage: string;
  orgName: string;
  page?: number;
  repoName: string;
  results?: [];
  sorting?: SingleValue<SortOption>;
  refetch: () => void;
  setOrgName: (orgName: string) => void;
  setPage: (page: any) => void;
  setRepoName: (repoName: string) => void;
  setSorting: (newValue: SingleValue<SortOption>) => void;
};

const SearchGitHubIssues = ({
  isError,
  isLoading,
  link,
  notFoundMessage,
  orgName,
  page,
  repoName,
  results,
  sorting,
  refetch,
  setOrgName,
  setPage,
  setRepoName,
  setSorting,
}: Props) => (
  <div className='app'>
    <SearchHeader
      orgName={orgName}
      repoName={repoName}
      refetch={refetch}
      setOrgName={setOrgName}
      setRepoName={setRepoName}
    />
    <SearchResults
      isError={isError}
      isLoading={isLoading}
      link={link}
      notFoundMessage={notFoundMessage}
      page={page}
      results={results}
      sorting={sorting}
      setPage={setPage}
      setSorting={setSorting}
    />
  </div>
);

export default SearchGitHubIssues
