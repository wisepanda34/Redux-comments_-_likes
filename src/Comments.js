import { useState } from "react";
import { commentCreate } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid"
import SingleComment from "./SingleComment";

function Comments(props) {

	const [textComment, setTextComment] = useState('');

	// console.log('Comments props	>>', props);

	// получаеим состояние из хранилища
	const comments = useSelector(state => {
		const { commentsReducer } = state;
		// console.log('redux state>>', state);

		return commentsReducer.comments;

	})
	console.log('comments >>', comments);

	const dispatch = useDispatch()

	const handleInput = (e) => {
		setTextComment(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const id = uniqid()
		dispatch(commentCreate(textComment, id))
	}


	return (
		<div className="card-comments">
			<form onSubmit={handleSubmit} className="comments-card-create">
				<input type="text" value={textComment} onChange={handleInput} />
				<input type="submit" hidden />
			</form>
			{!!comments.length && comments.map(res => {
				return <SingleComment key={res.id} data={res} />
			})}
		</div>
	);
}

export default Comments; 