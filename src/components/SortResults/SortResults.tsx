import Select from 'react-select';
import { SortResultsProps } from '../../config/types';
import './SortResults.css';

const SortResults = ({
  defaultSort,
  sortOptions,
  onSelectSort,
}: SortResultsProps) => (
  <div className='sort-container'>
    <Select
      className='sort-select'
      classNamePrefix='select'
      defaultValue={defaultSort}
      isClearable={false}
      name='sort'
      options={sortOptions}
      onChange={onSelectSort}
    />
  </div>
);

export default SortResults;
