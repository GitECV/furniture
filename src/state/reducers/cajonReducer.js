const reducer = (state = 0, action) => {
    switch (action.type) {
        case "Cajon1":
            return state = 0;

        case "Cajon2":
            return state = 1;

        case "Cajon3":
            return state = 2;

        case "Cajon4":
            return state = 3;

        default:
            return state
    }
}

export default reducer;