import "./styles/App.css";
import LatestPost from "./components/LatestPost";
import AllPosts from "./components/AllPosts";

function App() {
  return (
    <div className="App">
      <header className="nav-bar">
        <h1>Movies in Frame</h1>
        <button className="nav-links">Sign Up</button>
      </header>
      <div className="content-container">
        <div className="latest-container">
          <LatestPost />
        </div>
        <div className="all-container">
          <AllPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
