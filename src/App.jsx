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
  const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
  

  const fetchData = async() => {
    const options = {
      method: 'GET',
      headers: {
        Authorization:`Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
      }
    };

    try {
      const response = await fetch(url, options);
      if(!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      const todos = data.records.map(todo => ({
        title: todo.fields.title,
        id: todo.id
      }));

      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const postTodo = async(newTodo) => {
    const options = {
      method: 'POST',
      headers: {
        Authorization:`Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          title: newTodo.title,
        }
      })
    };

    try {
      const response = await fetch(url, options);
      if(!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      return {
        title: data.fields.title,
        id: data.id,
      };
    } catch (error) {
      console.error("Error adding todo:", error);
      return null;
    }

  };

  

  useEffect(() => {
    fetchData()
  }, []);

  useEffect(() => {
    if(!isLoading){
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
    
  }, [todoList])

  const addTodo = async (newTodo) => {
    const createdTodo = await postTodo(newTodo);
    if (createdTodo) {
      setTodoList([createdTodo, ...todoList]);
    }
  };

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
    </>
  )
}
export default App;
