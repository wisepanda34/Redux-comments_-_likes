import './App.css';
import Likes from './Likes';
import Title from './Title';
import Comments from './Comments';
import { commentsReducer } from './redux/commentsReducer';



function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing" />
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
