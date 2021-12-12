import { useState } from 'react';
import SearchHeader from './SearchHeader';

const SearchHeaderContainer = () => {
  const [orgName, setOrgName] = useState('');
  const [repoName, setRepoName] = useState('');

  const onSearch = () => {
    console.log({ orgName, repoName });
  };

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
