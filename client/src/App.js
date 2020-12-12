import "./App.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";

function App() {
  return (
    <>
      <Router>
        <div className="navbar">
          <Link to="/">Main Page</Link>
          <Link to="/createpost">Create Post</Link>
        </div>
        <Route path="/" exact render={(props) => <MainPage />} />
        <Route path="/createpost" render={(props) => <CreatePost />} />
        <Route path="/post/:postId" render={(props) => <Post />} />
      </Router>
    </>
  );
}

export default App;
