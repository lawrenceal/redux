import { combineReducers } from 'redux';
import { VisibilityFilter, SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO } from '../actions/todo';

function visibilityFilter(state = VisibilityFilter.SHOW_ALL, action) {
    switch (action.type){
        case SET_VISIBILITY_FILTER :
            return action.filter;
        default :
            return state;
    }
}

function todos(state = [{text: 'hello', complete: false}], action) {
    switch (action.type){
        case ADD_TODO :
            return [...state, { text: action.text, complete: false }];
        case TOGGLE_TODO :
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], { complete: !state[action.index].complete }),
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
}

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

export default todoApp;
