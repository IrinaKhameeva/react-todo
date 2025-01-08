import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({todoList, onRemoveTodo}) {
    todoList.map((i)=> console.log("TL item:" + i.title + ":" + i.id))
    return (
        <ul>
            {
            todoList.map((item) => (<TodoListItem item={item} onRemoveTodo={onRemoveTodo} />))
            }
        </ul>
    );
};


export default TodoList;