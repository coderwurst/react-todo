
let initialState = [
    { id: 1, title: "clean dishes"},
    { id: 2, title: "hoover floor" }
]

function addTodo(state = initialState, action) { 
    if (action.type === "TODO_ADD") {
        let newState = [];
        for (let todo of state) {
            newState.push({ id: todo.id, title: todo.title });
        }
        newState.push({ id: (newState.length + 1), title: action.title });
        return newState;
    } else {
        return state; 
    }
}

export default addTodo;