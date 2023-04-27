import React from 'react';

// For each Todo component, there should also be a button with the text “X” that when clicked, removes the todo.

const Todo = ({todo, removeTodo}) => {
    return(
        <li>{todo} <span onClick={removeTodo}>X</span></li>
    )
}

export default Todo;