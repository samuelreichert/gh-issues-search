import { useEffect, useState } from 'react';
import { SingleValue } from 'react-select';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import SearchHeader from './components/SearchHeader';
import SearchResults, { SortOption } from './components/SearchResults';
import searchIssues from './api/searchIssues';
import './App.css';

const queryClient = new QueryClient();

const AppWithQuery = () => {
  const [orgName, setOrgName] = useState('');
  const [repoName, setRepoName] = useState('');
  const [sorting, setSorting] = useState<SingleValue<SortOption> | undefined>(undefined);
  const { isFetching, isLoading, isError, data, refetch } = useQuery(
    ['searchIssues', { orgName, repoName, sorting }], searchIssues,
    { enabled: false }
  );

  useEffect(() => {
    if (sorting) {
      refetch();
    }
  }, [sorting, refetch]);

  const notFoundMessage = data?.message ?? '';

  const onSearch = () => {
    if (orgName.length === 0 || repoName.length === 0) return;

    refetch()
  };

  const headerProps = {
    orgName,
    setOrgName,
    repoName,
    setRepoName,
    onSearch,
  };

  console.log({ data })
  const resultsProps = {
    results: data,
    isLoading: isLoading || isFetching,
    isError,
    notFoundMessage,
    refetch,
    setSorting,
    sorting,
  };

  return (
    <div className='app'>
      <SearchHeader {...headerProps} />
      <SearchResults {...resultsProps} />
    </div>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppWithQuery />
    </QueryClientProvider>
  );
}

export default App;
