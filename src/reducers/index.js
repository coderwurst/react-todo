
let initState = {
    counter: 0,
    todos: [
        { id: 1, title: "clean dishes"},
        { id: 2, title: "hoover floor" }
    ]
}

function counter(state, action) { 
    if(action.type === "INCREMENT") {
        return state + 1;  
    } else if (action.type === "DECREMENT") {
        return state - 1; 
    } else {
        return state; 
    }
}

function todos(state, action) { 
    return state; 
}

function reduce(state = initState, action) { 
    return {
        counter: counter(state.counter, action),
        todos: todos(state.todos, action)
    }
}

export default reduce;