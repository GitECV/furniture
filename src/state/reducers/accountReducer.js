const reducer = (state = null, action) => {
    switch (action.type) {
        case "wood":
            return "wood";
        case "metal":
            return "metal";
        default:
            return null;
    }
}

export default reducer;