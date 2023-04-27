import React, {useState} from "react";
import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from './NewBoxForm';

it("renders without crashing", function() {
    render(<NewBoxForm />);
  });

it('renders learn react link', () => {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
});