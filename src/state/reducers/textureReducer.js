const reducer = (state = null, action) => {
    switch (action.type) {
        case "1":
            return "1";
        case "2":
            return "2";
        default:
            return null;
    }
}

export default reducer;