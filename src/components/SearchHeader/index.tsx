import SearchHeader from './SearchHeader';

type Props = {
  orgName: string;
  setOrgName: (orgName: string) => void;
  repoName: string;
  setRepoName: (repoName: string) => void;
  onSearch: () => void;
};

const SearchHeaderContainer = ({
  orgName,
  setOrgName,
  repoName,
  setRepoName,
  onSearch,
}: Props) => {
  return (
    <SearchHeader
      orgName={orgName}
      setOrgName={setOrgName}
      repoName={repoName}
      setRepoName={setRepoName}
      onSearch={onSearch}
    />
  )
};

export default SearchHeaderContainer;
