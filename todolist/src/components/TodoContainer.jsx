import { Box } from '@chakra-ui/react'
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { todocontext } from './TodoCreater'
import  Todo  from './Todo';
export default function TodoContainer() {
  const [tick,setTick]=useState(false)
  const {todo}=useContext(todocontext);
  const status=useRef();
  console.log(todo)

const changestatus=()=>{
console.log("a button is clicked")
console.log(status.current.value)

}
  // const changestatus=()=>{
  // }
return (
<>
{
todo.map((el)=>{
return <Todo/>

}
)
}
</>
  )
}
