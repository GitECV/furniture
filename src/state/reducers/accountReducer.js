const reducer = (state = null, action) => {
    switch (action.type) {
        case "metal":
            return state = "metal";

        case "wood":
            return state = "wood";

        default:
            return state
    }
}

export default reducer;