import { render,  } from '@testing-library/react';
import SearchHeader from './SearchHeader';
import { SearchHeaderProps } from '../../config/types';

test('renders GitHub Issues Search title', () => {
  const props: SearchHeaderProps = {
    orgName: 'foo',
    repoName: 'bar',
    onSearch: () => {},
    setOrgName: () => {},
    setRepoName: () => {},
  };

  const { getByText } = render(<SearchHeader {...props} />);

  expect(getByText('GitHub Issues Search')).toBeInTheDocument();
});
