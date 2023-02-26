import { connect } from "react-redux";
import { decrementLikes, incrementLikes } from "./redux/actions";

function Likes(props) {
	return (
		<div className="button-controls">
			<button onClick={props.onIncrementLikes}>❤ {props.likes}</button>
			<button onClick={props.onDecrementLikes}>Dislike</button>
		</div>
	);
}

//спец.функция mapStateToProps (из  { Connect }from "react-redux") пробрасывает состояние до компонента 
function mapStateToProps(state) {
	const { likesReducer } = state;

	return {
		likes: likesReducer.likes
	}
}

//спец.функция mapDispatchToProps (из  { Connect }from "react-redux") принимает dispatch из состояния  ; возвращает нами описанную cвойство-функцию  onIncrementLikes, кот. вызывает метод dispatch с определенного нами типом action
function mapDispatchToProps(dispatch) {
	return {
		onIncrementLikes: () => dispatch(incrementLikes()),
		onDecrementLikes: () => dispatch(decrementLikes())
	}
}



//экспортируем не просто компонент, а компонент на "стироидах", с доступом к хранилищу, т.е. коннектим Likes с store
export default connect(mapStateToProps, mapDispatchToProps)(Likes);