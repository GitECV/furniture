const reducer = (state = 0, action) => {
    switch (action.type) {
        case "Mesilla1":
            return state = 0;

        case "Mesilla2":
            return state = 1;

        case "Mesilla3":
            return state = 2;

        case "Mesilla4":
            return state = 3;

        default:
            return state
    }
}

export default reducer;