import React from 'react'
import { useContext,useEffect} from 'react'
import { useState } from 'react'
import { todocontext } from '../contexts/Todocontext'
import Todo from './Todo'
import axios from 'axios';

export default function Todolist() {
const {todos,setTodo}=useContext(todocontext)

useEffect(()=>{
 getdata()
 
  },[])

function getdata(){
    axios({
      method: 'get',
      url: 'http://localhost:8080/get',
      responseType: 'stream'
    }).then((res)=>{
      console.log(res)
    }).catch(err=>console.log(err))
  }

  return (
    <div>
{todos?.map((el)=>{
  return <Todo key={el.id} namevalue={el.namevalue} id={el.id} status={el.status}/>
})}
  

    </div>
  )
}
