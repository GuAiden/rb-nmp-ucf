import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders navbar', () => {
  render(<App />);
  const linkElement = screen.getByAltText('redbacklogo');
  expect(linkElement).toBeInTheDocument();
});
