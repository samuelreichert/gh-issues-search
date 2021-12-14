import { SearchHeaderProps } from '../../config/types';
import './SearchHeader.css';

const SearchHeader = ({
  orgName,
  repoName,
  onSearch,
  setOrgName,
  setRepoName,
}: SearchHeaderProps) => (
  <div className='search-container'>
    <h3 className='search-title'>GitHub Issues Search</h3>
    <div>
      <input
        type='text'
        className='search-input'
        placeholder='Organization Name...'
        value={orgName}
        onChange={(e) => setOrgName(e.currentTarget.value)}
      />
      <span className='input-divider'>/</span>
      <input
        type='text'
        placeholder='Repository Name...'
        value={repoName}
        onChange={(e) => setRepoName(e.currentTarget.value)}
      />
    </div>
    <div className='btn-container'>
      <button
        className='btn-search'
        onClick={onSearch}
        disabled={orgName.length === 0 || repoName.length === 0}
      >
        Search for Issues
      </button>
    </div>
  </div>
);

export default SearchHeader;
