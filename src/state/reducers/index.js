import { combineReducers } from "redux";
import accountReducer from './accountReducer';
import textureWoodReducer from './textureWoodReducer';
import textureMetalReducer from './textureMetalReducer';


const reducers = combineReducers ({
    material: accountReducer,
    textureWood: textureWoodReducer,
    textureMetal: textureMetalReducer
})

export default reducers;