import { combineReducers } from "redux";
import pomoReducer from './pomoReducer';
import cajonReducer from './cajonReducer';
import mesillaReducer from './mesillaReducer';
import materialReducer from './materialReducer';
import tapizReducer from './tapizReducer';

const reducers = combineReducers ({
    pomoMaterial: pomoReducer,
    cajonMaterial: cajonReducer,
    mesillaMaterial: mesillaReducer,
    changeMaterial: materialReducer,
    tapizMaterial: tapizReducer,
})

export default reducers;