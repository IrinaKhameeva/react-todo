import React, {useState} from "react";



function AddTodoForm({onAddTodo}) {
    console.log(onAddTodo);

    const [todoTitle, setTodoTitle] = React.useState("");

    function handleTitleChange(event) {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

    function handleAddTodo(event) {
        event.preventDefault();
        console.log("title:" + todoTitle);

        onAddTodo({
            title: todoTitle,
            id: Date.now(), 
          });
        setTodoTitle("");


          //console.log(newTodo); 

            //addTodo(newTodo);

            
    }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input 
                type="text" 
                id="todoTitle" 
                name="title" 
                value={todoTitle} 
                onChange={handleTitleChange} />
            <button type="submit" >Add</button>
        </form>
    );
};
export default AddTodoForm;