import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Todolist from './components/Todolist'
import Todocontextprovider from './contexts/Todocontext'
import Todocreater from './components/Todocreater'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Todocontextprovider>
   <Todocreater/>
   <Todolist/>

   </Todocontextprovider>
   </>
  )
}

export default App
