import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import searchIssues from '../../api/searchIssues';
import { Sorting } from '../../config/types';
import SearchGitHubIssues from './SearchGitHubIssues';

const SearchGitHubIssuesContainer = () => {
  const [searched, setSearched] = useState(false);
  const [orgName, setOrgName] = useState('');
  const [repoName, setRepoName] = useState('');
  const [sorting, setSorting] = useState<Sorting | undefined>(undefined);
  const [page, setPage] = useState<number | undefined>(undefined);
  const { isFetching, isLoading, isError, data, refetch } = useQuery(
    ['searchIssues', { orgName, repoName, sorting, page }],
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
    repoName,
    results: data?.data,
    sorting,
    refetch,
    setOrgName,
    setPage,
    setRepoName,
    setSorting,
    searched,
    setSearched,
  };

  return <SearchGitHubIssues {...searchGhIssuesProps} />;
};

export default SearchGitHubIssuesContainer;
