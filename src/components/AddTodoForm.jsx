import React, {useState} from "react";
import InputWithLabel from "./InputWithLabel";
import PropTypes from 'prop-types';



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


            
    }

    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel
                todoTitle={todoTitle}
                handleTitleChange={handleTitleChange}>Title</InputWithLabel>
            <button type="submit" >Add</button>
        </form>
    );
};

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func
  };

export default AddTodoForm;