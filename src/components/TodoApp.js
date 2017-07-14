import React from 'react';
import VisibleTodoList from './VisibleTodoList';
import Filter from './Filter';
import AddTodo from './AddTodo';
import '../style/todoList.css';

const TodoApp = () => {
    return (<div className="todo-container">
        <AddTodo/>
        <Filter/>
        <VisibleTodoList/>
    </div>);
};

export default TodoApp;