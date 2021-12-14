import { SingleValue } from 'react-select';

export type HandlePageClickArgs = {
  selected: number;
}

export type PaginationProps = {
  totalPages: number;
  handlePageClick: (click: HandlePageClickArgs) => void;
};

export type ResultsItemProps = {
  comments: number;
  created_at: string;
  draft: boolean;
  html_url: string;
  id: number;
  pull_request?: {};
  title: string;
  updated_at: string;
  user: {
    avatar_url: string;
    html_url: string;
    login: string;
  };
};

export type SearchGitHubIssuesProps = {
  isError: boolean;
  isLoading: boolean;
  link?: string | null;
  notFoundMessage: string;
  orgName: string;
  repoName: string;
  results?: [];
  searched: boolean;
  sorting?: Sorting;
  refetch: () => void;
  setOrgName: (orgName: string) => void;
  setPage: (page?: number) => void;
  setRepoName: (repoName: string) => void;
  setSearched: (searched: boolean) => void;
  setSorting: (newValue: Sorting) => void;
};

export type SearchHeaderContainerProps = {
  orgName: string;
  repoName: string;
  refetch: () => void;
  setOrgName: (orgName: string) => void;
  setRepoName: (repoName: string) => void;
  setSearched: (searched: boolean) => void;
};

export type SearchHeaderProps = {
  orgName: string;
  repoName: string;
  onSearch: () => void;
  setOrgName: (orgName: string) => void;
  setRepoName: (repoName: string) => void;
}

export type SearchResultsContainerProps = {
  isError: boolean;
  isLoading: boolean;
  notFoundMessage: string;
  link?: string | null;
  results?: [];
  searched: boolean;
  sorting?: Sorting;
  setSorting: (newValue: Sorting) => void;
  setPage: (page: number) => void;
};

export type SearchResultsProps = {
  isLoading: boolean;
  results?: [];
  sorting?: Sorting;
  totalPages: number;
  handlePageClick: (click: HandlePageClickArgs) => void;
  onSelectSort: (newValue: Sorting) => void;
};

export type Sorting = SingleValue<SortOption>;

export type SortOption = {
  label: string;
  value: string;
};

export type SortResultsContainerProps = {
  sorting?: Sorting;
  onSelectSort: (newValue: Sorting) => void;
};

export type SortResultsProps = {
  defaultSort: SortOption;
  sortOptions: SortOption[];
  onSelectSort: (newValue: Sorting) => void;
};
