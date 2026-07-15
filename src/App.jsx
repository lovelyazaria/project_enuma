import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './components/TodoItem'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Project from './pages/Project'
import About from './pages/About';

function App() {
  const [count, setCount] = useState(0)
  const [tasks, addTasks] = useState([]);
  return (
    <>
   
   <Navbar />
   
   <Routes>
    <Route path="/" element={<Home addTasks={addTasks} />} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/project" element={<Project/>} />
    <Route path="/about" element={<About/>} />
   </Routes>

   </>

  )
}

export default App
