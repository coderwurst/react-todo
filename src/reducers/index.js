import { combineReducers } from 'redux'

import counter from './counter';
import todos from './todo';

let reduce = combineReducers({
    counter: counter,
    todos: todos
})

export default reduce;