import { SingleValue } from 'react-select';
import { SortOption } from '../SearchResults';
import SortResults from './SortResults';

type Props = {
  sorting?: SortOption;
  onSelectSort: (newValue: SingleValue<SortOption>) => void;
};

const sortOptions: SortOption[] = [
  { label: 'Newest', value: '&sort=created&direction=desc' },
  { label: 'Oldest', value: '&sort=created&direction=asc' },
  { label: 'Most commented', value: '&sort=comments&direction=desc' },
  { label: 'Least commented', value: '&sort=comments&direction=asc' },
  { label: 'Recently updated', value: '&sort=updated&direction=desc' },
  { label: 'Least recently', value: '&sort=updated&direction:asc' },
];

const SortResultsContainer = ({ sorting, onSelectSort }: Props) => (
  <SortResults
    defaultSort={sorting ?? sortOptions[0]}
    sortOptions={sortOptions}
    onSelectSort={onSelectSort}
  />
);

export default SortResultsContainer;
