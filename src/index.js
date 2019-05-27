import React from 'react';
import ReactDOM from 'react-dom';

import counter from './reducers/index';
import { createStore } from 'redux'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let store = createStore(counter);
console.log(`initial state: ${store.getState()}`);

store.dispatch({type: "INCREMENT"});
console.log(`incremented state: ${store.getState()}`);

let render = () => {

    ReactDOM.render(
        <App 
            value={ store.getState() }
            onIncrement={ () => store.dispatch({type: "INCREMENT"}) }
            />, 
            document.getElementById('root')
        );
    
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();

}

render();                   // call the ReactDOM.render
store.subscribe(render);    // calls the render method by each update

