import React from 'react';

const Todo = (props) => {
    return (
        <li onClick={ props.onClick }  className={ props.complete ? 'completed' : '' }>{props.text}</li>
    );
};

export default Todo;