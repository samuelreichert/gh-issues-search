import SearchHeader from './SearchHeader';

type Props = {
  orgName: string;
  repoName: string;
  refetch: () => void;
  setOrgName: (orgName: string) => void;
  setRepoName: (repoName: string) => void;
};

const SearchHeaderContainer = ({
  orgName,
  repoName,
  refetch,
  setOrgName,
  setRepoName,
}: Props) => {
  const onSearch = () => {
    if (orgName.length === 0 || repoName.length === 0) return;
    refetch();
  };

  return (
    <SearchHeader
      orgName={orgName}
      setOrgName={setOrgName}
      repoName={repoName}
      setRepoName={setRepoName}
      onSearch={onSearch}
    />
  );
};

export default SearchHeaderContainer;
