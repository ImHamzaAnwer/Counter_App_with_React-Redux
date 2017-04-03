export var counterReducer = (state = 0, action) => {
    console.log(action.type);
    switch (action.type) {
        case "ADD":
            return state + 1;
        default:
            return state;
    }
}