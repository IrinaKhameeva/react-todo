import React from "react";

function AddTodoForm(props) {
    function handleAddTodo(event) {
        props.onAddTodo(todoTitle);
        event.preventDefault();
        const todoTitle = event.target.elements.title.value;
        console.log(todoTitle);      
        event.target.reset();
    }

    return (
        <form action=""  props>
            <label htmlFor="todoTitle">Title</label>
            <input type="text" id="todoTitle" name="title" />
            <button type="submit" onSubmit={handleAddTodo}>Add</button>
        </form>
    );
};
export default AddTodoForm;