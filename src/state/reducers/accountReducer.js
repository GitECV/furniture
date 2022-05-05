const reducer = (state = 0, action) => {
    switch (action.type) {
        case "wood":
            return 1;
        case "metal":
            
            return 2;
        default:
            return "hola";
    }
}

export default reducer;