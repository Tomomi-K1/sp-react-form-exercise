import { render, fireEvent } from "@testing-library/react";
import Box from './Box';

it("renders without crashing", function() {
    render(<Box />);
  });

it('renders learn react link', () => {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
});
