import { combineReducers } from "redux";
import { likesReducer } from "./likesReducer";
import { inputReducer } from "./inputReducer";
import { commentReducers } from "./commentReducers";


// скопка редюсеров
export const rootReducer = combineReducers({
	likesReducer: likesReducer,
	inputReducer: inputReducer,
	commentReducers: commentReducers
})