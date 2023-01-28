import { Button,Box,Input } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useContext } from "react";
import { todocontext,TodoContextProvider } from '../contexts/Todocontext';
function TodoCreater() {
const {todo,SetTodo,name}=useContext(todocontext);
console.log(todo)

const createTodo=()=>{
  let tname=name.current.value;
  console.log(tname);
SetTodo((prevtodo)=>{
return [...prevtodo,{name:tname,status:false,key:uuidv4()}]
})
name.current.value=null
}

  return (
<>

<Box textAlign={"center"}>
<label>Todo name</label>
<Input w={100}  ref={name} mt={20} ml={10} name="name"/> 
<Button variant={"outline"} _hover={{bg:"black",color:"white"}} display={"block"} ml={"48%"} onClick={createTodo} mt={10}>Create Todo</Button>    
<Button variant={"ghost"} display={"block"} ml={"48%"}  mt={10} _hover={{bg:"black",color:"white"}}>Clear Todo </Button>  
</Box>

 </>
  
)
}

export {TodoCreater,todocontext}
