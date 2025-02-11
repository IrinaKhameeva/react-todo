import React from "react";
import style from "./TodoListItem.module.css";
import PropTypes from 'prop-types';

function TodoListItem({item, onRemoveTodo}) {
    console.log("TLI added item:" + item)
        return (
        <li key={item.id} className={style.ListItem}>
            {item.title}
            <button type="button" onClick={() => onRemoveTodo(item.id)}>"Remove"</button>
        </li>
    );
}

TodoListItem.propTypes = {
    item: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired
    }).isRequired,
    onRemoveTodo: PropTypes.func.isRequired
};

export default TodoListItem;