import React from 'react'
import { useContext,Box } from 'react'
import {todocontext} from './TodoCreater'
// a todo app is something which can easily brush up some of basic and important concept of react js
export default function Todo({key,name,status}) {
console.log(key,name,status);

// console.log(todo)  

return (
    <Box>
    <input type={"checkbox"}  />
    <span>{name}</span>
    </Box>  
  )
  }
