import { useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import SearchHeader from './components/SearchHeader';
import SearchResults from './components/SearchResults';
import searchIssues from './api/searchIssues';
import './App.css';

const queryClient = new QueryClient();

const AppWithQuery = () => {
  const [orgName, setOrgName] = useState('');
  const [repoName, setRepoName] = useState('');
  const { isFetching, isLoading, isError, data, refetch } = useQuery(
    ['searchIssues', { orgName, repoName }], searchIssues,
    { enabled: false }
  );

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

  const resultsProps = {
    results: data,
    isLoading: isLoading || isFetching,
    isError,
    notFoundMessage,
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
