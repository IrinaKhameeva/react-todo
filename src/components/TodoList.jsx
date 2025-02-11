import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from 'prop-types';

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

TodoList.propTypes = {
    todoList: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
      })
    ).isRequired,
    onRemoveTodo: PropTypes.func.isRequired
  };


export default TodoList;