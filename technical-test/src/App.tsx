import { lazy } from 'react'
import './App.css'
import {ListTask} from './components/ListTasks'
import {TaskForm} from './components/TaskForm'
function App() {
 
  
  return (
    <>
      <TaskForm/>
      <ListTask/>
    </>  
  )
}

export default App
