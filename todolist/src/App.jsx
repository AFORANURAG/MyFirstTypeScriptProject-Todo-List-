import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {ChakraProvider} from "@chakra-ui/react"
import { Heading } from '@chakra-ui/react'
import {TodoCreater} from './components/TodoCreater';
import { TodoContextProvider } from './contexts/Todocontext';
import TodoContainer from './components/TodoContainer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
  <TodoContextProvider>
   <Heading textAlign={"center"} >
   My todo app
   </Heading>
<TodoCreater/>
<TodoContainer/>
</TodoContextProvider>
   </ChakraProvider>
  )
}

export default App
