import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'
import InputWithLabel from './InputWithLabel'



function App() {

  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todoList")) || []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("creating prom")
    new Promise((resolve) => 
      setTimeout(()=>{
       resolve({
          todoList: JSON.parse(localStorage.getItem("todoList")) || [],
       });
      }, 5000)
    ).then((result)=>{
      console.log("result:" + result);
      setTodoList(result.todoList);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if(!isLoading){
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
    
  }, [todoList])

  function addTodo (newTodo){
    setTodoList([newTodo, ...todoList]);
  }

  const onRemoveTodo = (id) => {
		setTodoList(todoList.filter(item => item.id !== id));
  }  
  console.log("app:")
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />

      {isLoading ? (
        <p>Loading...</p>
      ) : todoList.length === 0 ? (
      <p>You have no tasks yet</p> 
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={onRemoveTodo} />
        
      )}
            
      <TodoList todoList={todoList} onRemoveTodo={onRemoveTodo} />
    </>
  )
}
export default App;
