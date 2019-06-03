let initialState = null;

function wikipedia(state = initialState, action) {    
    if (action.type === "WIKIPEDIA_SEARCH") {
        return action.response;
    } else {
        return state;
    }
}

export default wikipedia;