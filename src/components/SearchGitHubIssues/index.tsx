import { useEffect, useState } from 'react';
import { SingleValue } from 'react-select';
import { useQuery } from 'react-query';
import { SortOption } from '../SearchResults';
import searchIssues from '../../api/searchIssues';
import SearchGitHubIssues from './SearchGitHubIssues';

const SearchGitHubIssuesContainer = () => {
  const [orgName, setOrgName] = useState('');
  const [repoName, setRepoName] = useState('');
  const [sorting, setSorting] = useState<SingleValue<SortOption> | undefined>(undefined);
  const [page, setPage] = useState(undefined);
  const { isFetching, isLoading, isError, data, refetch } = useQuery(
    ['searchIssues',
    { orgName, repoName, sorting, page }],
    searchIssues,
    { enabled: false }
  );

  useEffect(() => {
    if (sorting) refetch();
  }, [sorting, refetch]);

  useEffect(() => {
    if (page) refetch();
  }, [page, refetch]);

  const searchGhIssuesProps = {
    isError,
    isLoading: isLoading || isFetching,
    link: data?.link,
    notFoundMessage: data?.data?.message ?? '',
    orgName,
    page,
    repoName,
    results: data?.data,
    sorting,
    refetch,
    setOrgName,
    setPage,
    setRepoName,
    setSorting,
  };

  return <SearchGitHubIssues {...searchGhIssuesProps} />;
};

export default SearchGitHubIssuesContainer;
