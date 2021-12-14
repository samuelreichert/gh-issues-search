import SearchHeader from '../SearchHeader';
import SearchResults from '../SearchResults';
import { SearchGitHubIssuesProps } from '../../config/types';
import './SearchGitHubIssues.css';

const SearchGitHubIssues = ({
  isError,
  isLoading,
  link,
  notFoundMessage,
  orgName,
  repoName,
  results,
  searched,
  sorting,
  refetch,
  setOrgName,
  setPage,
  setRepoName,
  setSearched,
  setSorting,
}: SearchGitHubIssuesProps) => (
  <div className='app'>
    <SearchHeader
      orgName={orgName}
      repoName={repoName}
      refetch={refetch}
      setOrgName={setOrgName}
      setRepoName={setRepoName}
      setSearched={setSearched}
    />
    <SearchResults
      isError={isError}
      isLoading={isLoading}
      link={link}
      notFoundMessage={notFoundMessage}
      results={results}
      searched={searched}
      sorting={sorting}
      setPage={setPage}
      setSorting={setSorting}
    />
  </div>
);

export default SearchGitHubIssues
