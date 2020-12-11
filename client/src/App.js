import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CreatePost from "./pages/CreatePost";
function App() {
  return (
    <>
      <div className="navbar">
        <a href="/">Main Page</a>
        <a href="/createpost">Create Post</a>
      </div>
      <Router>
        <Route path="/" exact render={(props) => <MainPage />} />
        <Route path="/createpost" render={(props) => <CreatePost />} />
      </Router>
    </>
  );
}

export default App;
