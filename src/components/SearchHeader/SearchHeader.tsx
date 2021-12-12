import './SearchHeader.css';

type Props = {
  orgName: string;
  setOrgName: (orgName: string) => void;
  repoName: string;
  setRepoName: (repoName: string) => void;
  onSearch: () => void;
}

const SearchHeader = ({
  orgName,
  setOrgName,
  repoName,
  setRepoName,
  onSearch
}: Props) => {
  return (
    <div className='search-container'>
      <h3 className='search-title'>GitHub Issues Search</h3>
      <div>
        <input
          type='search'
          placeholder='Organization Name...'
          value={orgName}
          onChange={(e) => setOrgName(e.currentTarget.value)}
        />
        <span className='input-divider'>/</span>
        <input
          type='search'
          placeholder='Repository Name...'
          value={repoName}
          onChange={(e) => setRepoName(e.currentTarget.value)}
        />
      </div>
      <div className='btn-container'>
        <button
          className='btn-search'
          onClick={onSearch}
        >
          Search for Issues
        </button>
      </div>
    </div>
  );
};

export default SearchHeader;
