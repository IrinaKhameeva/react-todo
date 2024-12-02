import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'




function App() {

  const [todoList, setTodoList] = React.useState([]);
  //const [newTodo, setNewTodo] = React.useState('');

  function addTodo (newTodo){
    setTodoList([newTodo, ...todoList]);
  
    //setTodoTitle("");
  }



  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddItem1={addTodo} />
      
      <TodoList todoList={todoList} />
    </div>
  )
}



export default App;
