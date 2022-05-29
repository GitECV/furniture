const reducer = (state = 4, action) => {
    switch (action.type) {
        case "Tapiz1":
            return state = 4;

        case "Tapiz2":
            return state = 5;

        case "Tapiz3":
            return state = 6;

        default:
            return state
    }
}

export default reducer;