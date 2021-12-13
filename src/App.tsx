import { QueryClient, QueryClientProvider } from 'react-query';
import SearchGitHubIssues from './components/SearchGitHubIssues';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SearchGitHubIssues />
  </QueryClientProvider>
);

export default App;
