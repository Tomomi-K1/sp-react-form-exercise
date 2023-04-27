import React, {useState} from "react";

// NewBoxForm - this component should render a form that when submitted, creates a new Box. You should be able to specify the Box’s width, height, and background color. When the form is submitted, clear the input values.

const NewBoxForm = ({addBox}) => {
    
    const INITIAL_DATA = {
        bgColor: "",
        width: "",
        height: "",
    }

    const [formData, setFormData] = useState(INITIAL_DATA);

    const handleChange =(e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData, 
            [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({...formData});
        setFormData(INITIAL_DATA);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Create a New Box!</h1>
            <label htmlFor="bgColor">Background Color</label>
            <input 
                type="text" 
                id="bgColor"
                name="bgColor"
                value={formData.bgColor}
                onChange={handleChange}
            />
            <label htmlFor="width">Box Width</label>
            <input 
                type="text" 
                id="width"
                name="width"
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor="height">Box Height</label>
            <input 
                type="text" 
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
            />

            <button>Add a Box</button>
        </form>
    )
}

export default NewBoxForm;