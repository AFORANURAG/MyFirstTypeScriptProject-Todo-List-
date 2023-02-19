import React,{useContext} from 'react'
import { todocontext } from '../contexts/Todocontext'
import { v4 as uuidv4 } from 'uuid';
import { useRef } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function Todocreater() {
      
  const {todos,setTodo}=useContext(todocontext);
  const name=useRef();
  console.log(todos);


   function addtodo(){
    let namevalue=name.current.value
    setTodo((prevtodos)=>{
      return [...prevtodos,{id:uuidv4(),namevalue:namevalue,status:false}]
    })
    name.current.value=null;
   }
  //  useEffect(()=>{
  // getdata()

  //   },[]);

   useEffect(()=>{
   senddata()

    },[todos]);  

// function getdata(){
//   axios({
//     method: 'get',
//     url: 'http://localhost:8080/get',
//     responseType: 'stream'
//   }).then((res)=>{
//     res.json()
//   }).then(data=>console.log(data))
// }

function senddata(){
  axios({
    method: 'post',
    url: 'http://localhost:8080/post',
    data: {
      todos
    }
  }); 
    
  
}
      return (
    <div>
      <input ref={name} type="text" />
      <button onClick={addtodo}>Add Todo</button>
      <button onClick={()=>setTodo(todos.filter(el=>{return el.status==false}))}>Clear Complete Todo</button>
      <p>0 left todo</p>
    </div>
  )
}
