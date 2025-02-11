import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';

function InputWithLabel({todoTitle, handleTitleChange,children} ) {
     const inputRef = useRef();

     useEffect(() => {
	 	inputRef.current?.focus();
	 });

    return(
        <>
            <label htmlFor="todoTitle">{children}: </label>
            <input 
                type="text" 
                id="todoTitle" 
                name="title" 
                value={todoTitle} 
                onChange={handleTitleChange}
                ref={inputRef}
                 />
        </>
    );
}

InputWithLabel.propTypes = {
    todoTitle: PropTypes.string.isRequired,
    handleTitleChange: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
  };

export default InputWithLabel;