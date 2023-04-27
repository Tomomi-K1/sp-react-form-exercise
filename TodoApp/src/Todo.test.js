import { render, screen } from '@testing-library/react';
import Todo from './Todo';

test('renders', () => {
  render(<Todo />);
});

test('matches snapshot', () => {
  const { asFragment } = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
})