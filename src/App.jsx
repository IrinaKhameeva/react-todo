import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'




function App() {
  const [newTodo, setNewTodo] = React.useState('');



  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={setNewTodo}/>
      <p>New Todo <strong>{newTodo}</strong></p>
      <TodoList />
    </div>
  )
}

export default App;
