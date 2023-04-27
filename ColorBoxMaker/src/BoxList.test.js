import React, {useState} from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from './BoxList';

it("renders without crashing", function() {
    render(<BoxList />);
  });

it('renders learn react link', () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

