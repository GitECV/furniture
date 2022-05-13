const reducer = (state = null, action) => {
    switch (action.type) {
        case "mesillaPomo":
            return state = "Pomo";

        case "mesillaCajon":
            return state = "Cajon";

        case "mesillaMesilla":
            return state = "Mesilla";

        default:
            return state
    }
}

export default reducer;