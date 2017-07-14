import React from 'react';
import VisibleTodoList from './VisibleTodoList';
import Filter from './Filter';
import '../style/todoList.css';

const TodoApp = () => {
    return (<div className="todo-container">
        <Filter/>
        <VisibleTodoList/>
    </div>);
};

export default TodoApp;