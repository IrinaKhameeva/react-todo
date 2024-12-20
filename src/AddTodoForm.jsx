import React, {useState} from "react";
import InputWithLabel from "./InputWithLabel";



function AddTodoForm({onAddTodo}) {
    console.log(onAddTodo);

    const [todoTitle, setTodoTitle] = React.useState("");
    //  const inputRef = useRef(null);

    // useEffect(() => {
    //     if (inputRef.current) {
    //         inputRef.current.focus();
    //     }
    // }, [todoTitle])

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
export default AddTodoForm;