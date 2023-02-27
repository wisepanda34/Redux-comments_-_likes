import { COMMENT_CREATE } from "./types";

const initialState = {
	comments: []
}

export const commentReducers = (state = initialState, action) => {

	switch (action.type) {

		case COMMENT_CREATE:
			return {
				...state,
				comments: [...state.comments, action.data]
			}

		default: return state;
	}
}