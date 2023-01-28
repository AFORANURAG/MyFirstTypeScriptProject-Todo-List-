import { createContext } from "react";
import { useRef } from "react";
import { useContext,useState } from "react";
import { v4 as uuidv4 } from 'uuid';
const todocontext=createContext()

const TodoContextProvider=({children})=>{
    const [todo,SetTodo]=useState([{name:"hello",status:false,key:uuidv4()}])
    const name=useRef()

return (
<todocontext.Provider value={{todo,SetTodo,name}}>
{children}
</todocontext.Provider>
)

}
export {TodoContextProvider,todocontext}
