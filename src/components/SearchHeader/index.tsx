import SearchHeader from './SearchHeader';
import { SearchHeaderContainerProps } from '../../config/types';

const SearchHeaderContainer = ({
  orgName,
  repoName,
  refetch,
  setOrgName,
  setRepoName,
  setSearched,
}: SearchHeaderContainerProps) => {
  const onSearch = () => {
    if (orgName.length === 0 || repoName.length === 0) return;
    setSearched(true);
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
