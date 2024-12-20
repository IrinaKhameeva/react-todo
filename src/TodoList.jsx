import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({todoList, onRemoveTodo}) {
    return (
        <ul>
            {
            todoList.map((item) => (<TodoListItem item={item} onRemoveTodo={onRemoveTodo} />))
            }
        </ul>
    );
};


export default TodoList;