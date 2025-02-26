import React from "react";
import style from "./TodoListItem.module.css";
import PropTypes from 'prop-types';



const TodoListItem = ({ todo, onRemoveTodo, onToggleComplete, onToggleEdit, onEditTodo }) => {
    const handleEdit = (e) => {
      if (e.key === 'Enter') {
        onEditTodo(todo.id, e.target.value);
      }
    };
  
    return (
      <li className={style.ListItem}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)}
        />
        {todo.isEditing ? (
          <input
            type="text"
            defaultValue={todo.title}
            onKeyDown={handleEdit}
            onBlur={(e) => onEditTodo(todo.id, e.target.value)}
          />
        ) : (
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onDoubleClick={() => onToggleEdit(todo.id)}
          >
            {todo.title}
          </span>
        )}
        <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
      </li>
    );
  };



TodoListItem.propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      isEditing: PropTypes.bool.isRequired
    }).isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
    onToggleComplete: PropTypes.func.isRequired,
    onToggleEdit: PropTypes.func.isRequired,
    onEditTodo: PropTypes.func.isRequired
  };

export default TodoListItem;