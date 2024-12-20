import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

function useSemiPersistentState() {
  const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem("savedTodoList")));

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    console.log("Todo list saved to localStorage:", todoList);
  }, [todoList])

  return [todoList, setTodoList];
  

}

function App() {

  const [todoList, setTodoList] = useSemiPersistentState();

  function addTodo (newTodo){
    setTodoList([newTodo, ...todoList]);
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      
      <TodoList todoList={todoList} />
    </>
  )
}



export default App;
