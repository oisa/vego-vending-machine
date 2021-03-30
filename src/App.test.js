import { render, screen } from '@testing-library/react';
import App from './App';

test('Includes only 10c, 20c, 50c, $1 or $2.', () => {
  render(<App />);
  expect(screen.getByText('10c')).toBeInTheDocument();
  expect(screen.getByText('20c')).toBeInTheDocument();
  expect(screen.getByText('50c')).toBeInTheDocument();
  expect(screen.getByText('$1')).toBeInTheDocument();
  expect(screen.getByText('$2')).toBeInTheDocument();
});

test('Includes chocolate bars Organic Raw, Hazelnut and Caramel', () => {
  render(<App />);
  expect(screen.getByText('Organic Raw')).toBeInTheDocument();
  expect(screen.getByText('Hazelnut')).toBeInTheDocument();
  expect(screen.getByText('Caramel')).toBeInTheDocument();
});
