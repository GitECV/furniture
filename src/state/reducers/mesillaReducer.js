const reducer = (state = 4, action) => {
    switch (action.type) {
        case "Mesilla1":
            return state = 4;

        case "Mesilla2":
            return state = 5;

        case "Mesilla3":
            return state = 6;

        default:
            return state
    }
}

export default reducer;