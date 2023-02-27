

function SingleComment(props) {
	// console.log('SingleComment props	>>', props);

	return (
		<form className="comments-iteme">
			<div className="comments-iteme-delete">&times;</div>
			<input type="text" />
			<input type="submit" hidden />
		</form>
	);
}

export default SingleComment;