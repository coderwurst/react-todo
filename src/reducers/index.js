function counter(state = 0, action) {
    if(action.type === "INCREMENT") {
        return state + 1;           // create and return a new state 
    } else if (action.type === "DECREMENT") {
        return state - 1;
    } else {
        return state;
    }
}

export default counter;