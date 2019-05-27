import React from 'react';
import ReactDOM from 'react-dom';

import counter from './reducers/index';
import { createStore } from 'redux'
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from './actions/index'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let store = createStore(counter);
console.log(`initial state: ${store.getState()}`);

let mapStateToProps = (state) => {
    return {
        value: state
    }
}

let mapDispatchToProps = {
    onIncrement: incrementCounter,
    onDecrement: decrementCounter
}

let ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
    <ConnectedApp store={ store }/>, 
        document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

