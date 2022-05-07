import { combineReducers } from "redux";
import accountReducer from "./accountReducer"
import textureReducer from "./textureReducer"

const reducers = combineReducers ({
    account: accountReducer,
    texture: textureReducer
});

export default reducers;