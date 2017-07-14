import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todo';
import { VisibilityFilter } from '../actions/todo';
import TodoList from './TodoList';

const { SHOW_ALL, SHOW_COMPLETE, SHOW_ACTIVE} = VisibilityFilter;

const getVisibleTodos = (todos, filter) => {
    switch (filter){
        case SHOW_ALL:
            return todos;
        case SHOW_ACTIVE:
            return todos.filter( todo => !todo.complete );
        case SHOW_COMPLETE:
            return todos.filter( todo => todo.complete );
        default:
            return todos;
    }
};

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;