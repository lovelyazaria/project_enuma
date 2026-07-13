import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './components/TodoItem'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {
  const [count, setCount] = useState(0)
  const [tasks, addTasks] = useState([]);
  return (
    <>
   <nav>
    navbar
   </nav>
   
   <h1>App</h1>
  <p>Ini adalah sesuatu yang menyenangkan</p>
  <TodoForm onAddTask={addTasks} />
  <TodoList />
  

   </>

  )
}

export default App
