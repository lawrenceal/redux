import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoReduces from './reduces/todo';
import TodoApp from './components/TodoApp';
import QRCodeZip from './components/LoadQRCodeZip'

import './style/index.css';

let store = createStore(todoReduces);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div className="container">
                <ul className="menu">
                    <li><Link to="/">index</Link></li>
                    <li><Link to="/todolist">todolist</Link></li>
                    <li><Link to="/QRCodeZip">QRCodeZip</Link></li>
                </ul>
                <Switch>
                    <Route path="/" exact render={() => (<h3>hello redux</h3>)}/>
                    <Route path="/todolist" component={TodoApp}/>
                    <Route path="/QRCodeZip" component={QRCodeZip}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

