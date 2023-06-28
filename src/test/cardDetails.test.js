import React from 'react';
import { render, screen } from '@testing-library/react';
import CardDetails from '../component/cardDetails';

it('displays loading message when data is not yet fetched', () => {
  render(<CardDetails />);

  const loadingMessage = screen.getByText('Loading...');
  expect(loadingMessage).toBeInTheDocument();
});
