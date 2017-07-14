import React from 'react';
import FilterLink from './FilterLink';
import { VisibilityFilter } from '../actions/todo';

const Filter = () => {
    return (
        <div className="filter">
            <span>Show: </span>
            <FilterLink filter={ VisibilityFilter.SHOW_ALL }>
                all
            </FilterLink>
            <FilterLink filter={ VisibilityFilter.SHOW_ACTIVE }>
                Active
            </FilterLink>
            <FilterLink filter={ VisibilityFilter.SHOW_COMPLETE }>
                Completed
            </FilterLink>
        </div>
    );
};

export default Filter;