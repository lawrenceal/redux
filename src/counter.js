import React from 'react';
import { createStore } from 'redux';

const INCREMENT = 'INCREMENT', DECREMENT = 'DECREMENT';

function reduce(state = 0, action){
    switch (action.type){
        case INCREMENT : return state + 1;
        case DECREMENT : return state - 1;
        default: return state;
    }
}

let store = createStore(reduce);

let incrementHandler = () => {
    store.dispatch({type: INCREMENT});
};

let decrementHandler = () => {
    store.dispatch({type: DECREMENT});
};

store.subscribe(() => {
    let state = store.getState();
    console.log(state);
});

const Counter = (props) => {
    return (
        <div>
            <input value={props.value} />
            <button onClick={incrementHandler}>增加</button>
            <button onClick={decrementHandler}>减少</button>
        </div>
    );
};

export default Counter;