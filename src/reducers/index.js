import { combineReducers } from 'redux';

import counter from './counter';
import todos from './todo';
import wikipedia from './wikipedia';

let reduce = combineReducers({
    counter: counter,
    todos: todos,
    wikipedia: wikipedia
})

export default reduce;