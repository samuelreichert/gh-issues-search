import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import SearchHeader from './SearchHeader';
import { SearchHeaderProps } from '../../config/types';

const props: SearchHeaderProps = {
  orgName: '',
  repoName: '',
  onSearch: jest.fn(),
  setOrgName: jest.fn(),
  setRepoName: jest.fn(),
};

test('renders GitHub Issues Search title', () => {
  const { getByText } = render(<SearchHeader {...props} />);
  expect(getByText('GitHub Issues Search')).toBeInTheDocument();
});

test('renders organization input with orgName value', () => {
  const { getByPlaceholderText } = render(<SearchHeader {...props} orgName='facebook' />);
  expect(getByPlaceholderText('Organization Name...')).toHaveValue('facebook');
});

test('changes organization field with text', () => {
  const { getByPlaceholderText } = render(<SearchHeader {...props} />);
  fireEvent.change(getByPlaceholderText('Organization Name...'), { target: { value: 'facebook'} });
  expect(props.setOrgName).toBeCalledWith('facebook');
});

test('fill repository field with text', () => {
  const { getByPlaceholderText } = render(<SearchHeader {...props} />);
  fireEvent.change(getByPlaceholderText('Repository Name...'), { target: { value: 'react'} });
  expect(props.setRepoName).toBeCalledWith('react');
});

test('searches for GitHub Issues', () => {
  const searchProps: SearchHeaderProps = {
    ...props,
    orgName: 'facebook',
    repoName: 'react',
  }
  const { getByText } = render(<SearchHeader {...searchProps} />);
  fireEvent.click(getByText('Search for Issues'))
  expect(searchProps.onSearch).toHaveBeenCalledTimes(1);
});

describe('Try to search issues without filling org name', () => {
  const searchProps: SearchHeaderProps = {
    ...props,
    orgName: '',
    repoName: 'react',
  };

  test('should not fire search because button is disabled', () => {
    const { getByPlaceholderText, getByText } = render(<SearchHeader {...searchProps} />);
    fireEvent.click(getByText('Search for Issues'));
    expect(getByPlaceholderText('Organization Name...')).toHaveValue('');
    expect(searchProps.onSearch).toHaveBeenCalledTimes(0);
    expect(getByText('Search for Issues')).toBeDisabled();
  });
});

describe('Try to search issues without filling repo name', () => {
  const searchProps: SearchHeaderProps = {
    ...props,
    orgName: 'facebook',
    repoName: '',
  };

  test('should not fire search because button is disabled', () => {
    const { getByPlaceholderText, getByText } = render(<SearchHeader {...searchProps} />);
    fireEvent.click(getByText('Search for Issues'));
    expect(getByPlaceholderText('Repository Name...')).toHaveValue('');
    expect(searchProps.onSearch).toHaveBeenCalledTimes(0);
    expect(getByText('Search for Issues')).toBeDisabled();
  });
});
