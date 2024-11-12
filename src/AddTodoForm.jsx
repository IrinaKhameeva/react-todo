import { useState } from 'react'

function AddTodoForm() {
    return (
        <form action="">
            <label htmlFor="todoTitle">Title</label>
            <input type="text" id="todoTitle" />
            <button type="submit">Add</button>
        </form>
    );
};
export default AddTodoForm