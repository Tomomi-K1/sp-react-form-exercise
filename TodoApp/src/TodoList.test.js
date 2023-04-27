import { render, fireEvent} from "@testing-library/react";
import TodoList from './TodoList';

test('renders', () => {
  render(<TodoList />);
});

test('matches snapshot', () => {
  const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
})

test('add a new todo', () => {
    const {queryByText, getByLabelText, getByText } =render(<TodoList />);

    // new todo "Study coding" does not exist on the document yet
    expect(queryByText("Study coding")).not.toBeInTheDocument();

    // getting input value and submit button to fireEvent
    const todoInput = getByLabelText("Enter Your ToDo");
    const btn = getByText("Submit");

    // fillout form and submit
    fireEvent.change(todoInput, {target:{value:"Study coding"}})
    fireEvent.click(btn);

    // now new todo "Study coding" exist on the document
    expect(queryByText("Study coding")).toBeInTheDocument();
})

test("delete existing todo", () => {
  const {queryByText, getByLabelText, queryAllByText } =render(<TodoList />);

    // new todo "Study coding" does not exist on the document yet
    expect(queryByText("Go Swimming")).toBeInTheDocument();

    // getting X next to Go Swimming
    const deleteBtns = queryAllByText("X");

    // Click X to delete "Go Swimming"
    deleteBtns.map(btn => fireEvent.click(btn))
      

    // now new todo "Study coding" exist on the document
    expect(queryByText("Go Swimming")).not.toBeInTheDocument();
})
   

