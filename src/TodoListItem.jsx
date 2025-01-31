import React from "react";
import style from "./TodoListItem.module.css";

function TodoListItem({item, onRemoveTodo}) {
    console.log("TLI added item:" + item)
        return (
        <li key={item.id} className={style.ListItem}>
            {item.title}
            <button type="button" onClick={() => onRemoveTodo(item.id)}>"Remove"</button>
        </li>
    );
}

export default TodoListItem;