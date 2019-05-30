
let initialState = [
    { id: 1, title: "clean dishes"},
    { id: 2, title: "hoover floor" }
]

function addTodo(state = initialState, action) { 
    if (action.type === "TODO_ADD") {
        return [].concat(state, [
            { id: (state.length + 1), title: action.title }
        ]);
    } else {
        return state; 
    }
}

export default addTodo;