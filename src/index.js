import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'
import Home from './Home'
import Navigation from './Navigation'
import TodoList from './TodoList'

import counter from './reducers/index'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { HashRouter, Route } from 'react-router-dom'

import * as serviceWorker from './serviceWorker';

let store = createStore(counter);

ReactDOM.render(
    <Provider store={ store }>
        <HashRouter>
            <div>
                <Navigation />

                <Route exact={ true } path="/" component={ Home } />
                <Route path="/clicker" component={ App } />
                <Route path="/todo" component={ TodoList } />
            </div>
        </HashRouter>
    </Provider>,
        document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
