import counter from './counter';
import todos from './todo';

function reduce(state, action) { 
    if (state === undefined) {
        return {
            counter: counter(undefined, action),
            todos: todos(undefined, action)
        }
    } else {
        return {
            counter: counter(state.counter, action),
            todos: todos(state.todos, action)
        }
    }
}

export default reduce;