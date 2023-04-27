import { render, screen } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

test('renders', () => {
  render(<NewTodoForm />);
});

test('matches snapshot', () => {
  const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
})