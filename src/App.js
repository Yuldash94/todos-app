import React from 'react';
import './App.css';
import {useState} from 'react'
import ToDo from './components/ToDo';
import ToDoIn from './components/ToDoIn';

function App() {

  const [todos, setTodos] = useState([])

  const addTask = (input) => {
    if (input) {
      const newItem = {
        id: Math.random().toString(36).substring(2,9),
        task: input,
        done: false
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToogle = (id) => {
    setTodos([...todos.map((todo) => todo.id === id ? {...todo, done: !todo.done} : {...todo})])
  }

  return (
    <div className='App'>
      <header> 
        <h1>To Do List: {todos.length}</h1>
      </header>
      <ToDoIn addTask={addTask}/>
      {todos.map((todo) => {
        return(
          <ToDo 
            todo={todo}
            key={todo.id}
            removeTask={removeTask}
            handleToogle={handleToogle}
          />
        )
      })}
    </div>
  )
}

export default App;
