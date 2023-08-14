import "../styles/App.css";
import LatestPost from "./LatestPost";
import AllPosts from "./AllPosts";

function Home(props) {
  const truncateText = (text) => {
    if (text.length > 200) return text.substring(0, 200) + " ...";
    else return text;
  };

  return (
    <div className="App">
      <div className="content-container">
        <div className="latest-container">
          {props.latestPost && (
            <LatestPost
              truncate={truncateText}
              post={props.latestPost}
              pic={props.pic}
            />
          )}
        </div>
        <div className="all-container">
          {props.allPosts && (
            <AllPosts truncate={truncateText} posts={props.allPosts} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
