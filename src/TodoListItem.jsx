import React from "react";

function TodoListItem({item, onRemoveTodo}) {
    console.log("TLI added item:" + item)
        return (
        <li key={item.id}>
            {item.title}
            <button type="button" onClick={() => onRemoveTodo(item.id)}>"Remove"</button>
        </li>
    );
}

export default TodoListItem;