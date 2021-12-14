import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import SearchResults from './SearchResults';
import { ResultsItemProps, SearchResultsProps } from '../../config/types';

const props: SearchResultsProps = {
  isLoading: false,
  results: [],
  sorting: undefined,
  totalPages: 1,
  handlePageClick: jest.fn(),
  onSelectSort: jest.fn(),
};

const resultItemProps: ResultsItemProps = {
  comments: 0,
  created_at: (new Date()).toString(),
  html_url: 'https://www.foo.com/abc',
  id: 123,
  title: 'abc',
  updated_at: (new Date()).toString(),
};

test('shows loading component while loading', () => {
  const { getByText } = render(<SearchResults {...props} isLoading={true} />);
  expect(getByText('Loading...')).toBeInTheDocument();
});

test('shows sort component', () => {
  const sorting = { label: 'Oldest', value: 'abc' };
  const { getByText } = render(<SearchResults {...props} sorting={sorting} />);
  expect(getByText('Oldest')).toBeInTheDocument();
});

test('shows results listed in the component', () => {
  const results = [resultItemProps];
  const { getByText, getByTestId } = render(<SearchResults {...props} results={results} />);
  expect(getByTestId('result-item-title')).toBeInTheDocument();
  expect(getByText('0 comments')).toBeInTheDocument();
});

test('show pagination component', () => {
  const { getByText } = render(<SearchResults {...props} totalPages={3} />);
  expect(getByText('1')).toBeInTheDocument();
  expect(getByText('2')).toBeInTheDocument();
  expect(getByText('3')).toBeInTheDocument();
  expect(getByText('Next')).toBeInTheDocument();
  expect(getByText('Previous')).toBeInTheDocument();
});

test('changes page by clicking on pagination link', () => {
  const { getByText } = render(<SearchResults {...props} totalPages={3} />);
  fireEvent.click(getByText('3'))
  expect(props.handlePageClick).toHaveBeenCalled();
});
