import React from "react";

// Box- this component should display a div with a background color, width and height based on the props passed to it.

const Box = ({color, width, height, removeBox}) => {

    return (
        <div 
            style={{
                backgroundColor: color, 
                height:height, 
                width: width
            }}
            data-testid={color}
        >
        <h4 onClick={removeBox}>x</h4>
        </div>
    )
}

export default Box;