import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from 'prop-types';



  const TodoList = ({ todoList, onRemoveTodo, onToggleComplete, onToggleEdit, onEditTodo }) => {
    return (
      <ul>
        {todoList.map(todo => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onRemoveTodo={onRemoveTodo}
            onToggleComplete={onToggleComplete}
            onToggleEdit={onToggleEdit}
            onEditTodo={onEditTodo}
          />
        ))}
      </ul>
    );
  };
  
  TodoList.propTypes = {
    todoList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        isEditing: PropTypes.bool.isRequired
      })
    ).isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
    onToggleComplete: PropTypes.func.isRequired,
    onToggleEdit: PropTypes.func.isRequired,
    onEditTodo: PropTypes.func.isRequired
  };

export default TodoList;