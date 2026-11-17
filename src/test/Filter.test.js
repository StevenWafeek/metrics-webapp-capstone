import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Filter from '../component/Filter';

describe('Filter', () => {
  it('renders the filter component', () => {
    const searchTerm = 'test';
    const onSearchMock = jest.fn();

    render(<Filter searchTerm={searchTerm} onSearch={onSearchMock} />);

    const inputElement = screen.getByPlaceholderText('Search...');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe(searchTerm);
  });

  it('calls onSearch function when input value changes', () => {
    const searchTerm = 'test';
    const onSearchMock = jest.fn();

    render(<Filter searchTerm={searchTerm} onSearch={onSearchMock} />);

    const inputElement = screen.getByPlaceholderText('Search...');
    const newSearchTerm = 'new test';
    fireEvent.change(inputElement, { target: { value: newSearchTerm } });

    expect(onSearchMock).toHaveBeenCalledTimes(1);
    expect(onSearchMock).toHaveBeenCalledWith(newSearchTerm);
  });
});
