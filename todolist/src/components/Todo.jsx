import React from 'react'
import { useContext } from 'react'
import { todocontext } from '../contexts/Todocontext'

export default function Todo({namevalue,status,id}) {
const {todos,setTodo}=useContext(todocontext)

function handleOnChange(){
        console.log(todos)
let newtodos=[...todos];
let todotochange=newtodos.find((el)=>{
    return el.id==id
})
todotochange.status=!todotochange.status
setTodo(newtodos);
    }
  return (
    <>
    <div style={{display:"flex",flexDirection:"column"}}>
    <label htmlFor="">
    {namevalue}
    </label>
    <input type="checkbox" checked={status} onChange={handleOnChange} />
    </div>
   
    
    </>
  )
}
