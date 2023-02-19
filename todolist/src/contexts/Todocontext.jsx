import React from 'react';
import { createContext,useState } from 'react';
export  const todocontext=createContext();

export default function Todocontextprovider({children}) {
    const [todos,setTodo]=useState([])
    return (
    <todocontext.Provider value={{todos,setTodo}}>
    {children}

    </todocontext.Provider>)
}
