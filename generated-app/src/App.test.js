import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/React link/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders edit source', () => {
  render(<App />);
  const pElement = screen.getByText(/src\/App.js/i);
  expect(pElement).toBeInTheDocument();
});
