import { COMMENT_CREATE } from "./types";
import { COMMENT_UPDATE } from "./types";
import { COMMENT_DELETE } from "./types";

const initialState = {
	comments: []
}

export const commentsReducer = (state = initialState, action) => {
	// console.log('comment Reducer >> ', action);
	switch (action.type) {

		case COMMENT_CREATE:
			return {
				...state,
				comments: [...state.comments, action.data]
			}

		case COMMENT_UPDATE:
			const { data } = action;
			const { comments } = state;
			//находим индекс того комментария, кот. хотим поменять
			const itemIndex = comments.findIndex(res => res.id === data.id);
			//перезаписываем состояние, подставляя вместо старого коммента новый
			const newComments = [
				...comments.slice(0, itemIndex),
				data,
				...comments.slice(itemIndex + 1)
			]
			return {
				...state,
				comments: newComments
			}

		case COMMENT_DELETE:
			return (() => {
				const { id } = action;
				const { comments } = state;
				//находим индекс того комментария, кот. хотим удалить
				const itemIndex = comments.findIndex(res => res.id === id);
				//перезаписываем состояние без удаляемого элемента
				const newComments = [
					...comments.slice(0, itemIndex),
					...comments.slice(itemIndex + 1)
				]

				return {
					...state,
					comments: newComments
				}
			})();

		default: return state;
	}
}