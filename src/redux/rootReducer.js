import { combineReducers } from "redux";
import { likesReducer } from "./likesReducer";
import { inputReducer } from "./inputReducer";
import { commentsReducer } from "./commentsReducer";


// скопка редюсеров
export const rootReducer = combineReducers({
	likesReducer: likesReducer,
	inputReducer: inputReducer,
	commentsReducer: commentsReducer
})