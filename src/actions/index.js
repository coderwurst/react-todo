export function incrementCounter() {
    return {type: "INCREMENT"};
}

export function decrementCounter() {
    return {type: "DECREMENT"};
}

export function addTodo(title) {
    return {type: "TODO_ADD", title: title};
}