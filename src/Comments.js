import { useState } from "react";
import { commentCreate } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid"
import SingleComment from "./SingleComment";

function Comments(props) {
	console.log('Comments props	>>', props);

	const { textComment, setTextComment } = useState('')

	//получаеим состояние из хранилища
	const comments = useSelector(state => {
		console.log('redux state>>', state);
	})

	const dispatch = useDispatch()

	const handleInput = (e) => {
		setTextComment(e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('submit textComment>>', textComment);
		const id = uniqid()
		dispatch(commentCreate(textComment, id))

	}


	return (
		<div className="card-comments">
			<form onSubmit={handleSubmit} className="comments-card-create">
				<input type="text" value={textComment} onChange={handleInput} />
				<input type="submit" hidden />
			</form>
			<SingleComment />
		</div>
	);
}

export default Comments; 