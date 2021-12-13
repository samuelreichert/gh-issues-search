import Select, { SingleValue } from 'react-select';
import { SortOption } from '../SearchResults';
import './SortResults.css';

type Props = {
  defaultSort: SortOption;
  sortOptions: SortOption[];
  onSelectSort: (newValue: SingleValue<SortOption>) => void;
};

const SortResults = ({
  defaultSort,
  sortOptions,
  onSelectSort,
}: Props) => (
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
