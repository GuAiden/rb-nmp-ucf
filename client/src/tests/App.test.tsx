import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders navbar', () => {
  render(<App />);
  const linkElement = screen.getByAltText('redbacklogo');
  expect(linkElement).toBeInTheDocument();
});

test('renders menuswitcher component', () => {
  render(<App />);
  const linkElement = screen.getByText('Inputs');
  const linkElement2 = screen.getByText('Outputs');
  const linkElement3 = screen.getByText('Server');
  const linkElement4 = screen.getByText('Summary');
  expect(linkElement).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
  expect(linkElement3).toBeInTheDocument();
  expect(linkElement4).toBeInTheDocument();
});
