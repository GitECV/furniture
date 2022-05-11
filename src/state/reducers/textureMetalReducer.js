const reducer = (state = 0, action) => {
    switch (action.type) {
        case "3":
            return state = "3";

        case "4":
            return state = "4";

        case "5":
            return state = "5";

        default:
            return state
    }
}

export default reducer;