import React, {useState} from "react";
import { render, fireEvent, queryByTestId } from "@testing-library/react";
import BoxList from './BoxList';

it("renders without crashing", function() {
    render(<BoxList />);
  });

it('renders learn react link', () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("can add a new box", function() {
   const { getByLabelText, queryByText, queryByTestId } = render(<BoxList />);
 
   // no items yet
   expect(queryByTestId("green")).not.toBeInTheDocument();
 
   const bgColor = getByLabelText("Background Color");
   const width = getByLabelText("Box Width");
   const height = getByLabelText("Box Height")
   const btn = queryByText("Add a Box")
 
   // fill out the form
   fireEvent.change(bgColor, { target: { value: "green" }});
   fireEvent.change(width, { target: { value: "300px" }});
   fireEvent.change(height, { target: { value: "300px" }});
   fireEvent.click(btn);
 
   // item exists!
   expect(queryByTestId("green")).toBeInTheDocument();
 });

