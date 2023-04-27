import React, {useState} from 'react';


// NewTodoForm - this component should render a form with one text input for the task to be created. When this form is submitted, a new Todo component should be created. - Todo- this component should display a div with the task of the todo.

const NewTodoForm = ({addTodo}) => {
    const INITIAL_STATE={
        todo:""
    }

    const [formData, setFormData] = useState(INITIAL_STATE)
    
    const handleChange=(e)=>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({...formData});
        // {...formData} does this makes a copy? why can't we just pass formData?
        setFormData(INITIAL_STATE);
    }
        
    return(
        <form>
            <label htmlFor="todo">Enter Your ToDo</label>
            <input 
                id="todo" 
                name="todo" 
                type="text"
                value={formData.todo}
                onChange={handleChange} 
            />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )      
}

export default NewTodoForm;
