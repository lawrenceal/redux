import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <ul className="todo-list">
            {props.todos.map( (todo, index) =>
                <Todo {...todo} key={index} onClick={ () => props.onTodoClick(index) }/>
            )}
        </ul>
    );
};

export default TodoList;