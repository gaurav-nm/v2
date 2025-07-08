import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Gaurav Pal in navbar', () => {
  render(<App />);
  const nameElement = screen.getByText(/Gaurav Pal/i);
  expect(nameElement).toBeInTheDocument();
});
