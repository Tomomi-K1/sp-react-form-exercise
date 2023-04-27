import React, {useState} from "react";
import {v4 as uuid} from 'uuid';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm"


// BoxList - Place your state that contains all of the boxes here. 
// This component should render all of the Box components along with the NewBoxForm component

const BoxList = () => {
   const INITIAL_DATA =[
      {id:uuid(), bgColor: "pink", width:"100px", height:"100px"},
      {id:uuid(), bgColor: "teal", width:"200px", height:"200px"}
   ];

   const [boxes, setBoxes] = useState(INITIAL_DATA);

   const addBox =(newBox) =>{
      setBoxes(boxes=>[...boxes, {...newBox, id:uuid()}])
   }

   const removeBox =(id) => {
      setBoxes(boxes=>boxes.filter(box=>box.id!==id)) 
   }

   return (
      <div>
         <NewBoxForm addBox={addBox} />
         {boxes.map(box=>(
            <Box key={box.id} color={box.bgColor} width={box.width} height={box.height} removeBox={()=>removeBox(box.id)}/>
         ))}
         
      </div>
   )
}

export default BoxList;