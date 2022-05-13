const reducer = (state = 4, action) => {
    switch (action.type) {
        case "Pomo1":
            return state = 4;

        case "Pomo2":
            return state = 5;

        case "Pomo3":
            return state = 6;

        default:
            return state
    }
}

export default reducer;