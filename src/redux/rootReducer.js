import { combineReducers } from "redux";
import { likesReducer } from "./likesReducer";
import { inputReducer } from "./inputReducer";


// скопка редюсеров
export const rootReducer = combineReducers({
	likesReducer: likesReducer,
	inputReducer: inputReducer
})