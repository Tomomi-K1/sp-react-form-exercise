import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

// TodoList - this component should render the NewTodoForm component and should render the list of Todo components. Place your state that contains all of the todos in this component.
// When this form is submitted, a new Todo component should be created. - Todo- this component should display a div with the task of the todo.

const TodoList = () => {
    // INITIAL VALUES
    const INITIAL_STATE =[
        {id:uuid(), todo:"Go Swimming"},
        {id:uuid(), todo:"Buy Shrimp from Costco"}
    ]
    // state to keep todos
    const [todos, setTodos] = useState(INITIAL_STATE);

    //function to add a Todo and update todos in state
    const addTodo = (newTodo) => {
        setTodos(todos=>[...todos, {...newTodo, id:uuid()}
        ]) 
    }

    // function to remove a todo
    const removeTodo = (id) =>{
        setTodos(todos=>todos.filter(todo=>todo.id !==id))
    }

    return(
        <div>
            <NewTodoForm addTodo={addTodo}/>
            <ul>
            {todos.map(todo =>(
                <Todo todo={todo.todo} removeTodo={()=>removeTodo(todo.id)} key={todo.id}/>
            ))}
            </ul>
        </div>
    )
      
}

export default TodoList;

