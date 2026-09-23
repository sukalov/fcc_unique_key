import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Syndikat Library heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /syndikat library/i });
  expect(heading).toBeInTheDocument();
});
