const reducer = (state = null, action) => {
    switch (action.type) {
        case "0":
            return state = "0";

        case "1":
            return state = "1";

        case "2":
            return state = "2";

        default:
            return state
    }
}

export default reducer;