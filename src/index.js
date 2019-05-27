import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import counter from './reducers/index';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker';

let store = createStore(counter);
console.log(`initial state: ${store.getState()}`);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
        document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
