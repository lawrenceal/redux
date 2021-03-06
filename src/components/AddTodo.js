import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todo';

let AddTodo = ({ dispatch }) => {

    let input;

    return (
        <div className="add-todo">
           <form onSubmit={ e => {
               e.preventDefault();
               if(!input.value.trim()){
                   return
               }
               dispatch(addTodo(input.value));
               input.value = '';
           }}>
               <input type="text" ref={node => {input = node}}/>
               <button type="submit"> Add </button>
           </form>
        </div>
    );
};

AddTodo = connect()(AddTodo);

export default AddTodo;