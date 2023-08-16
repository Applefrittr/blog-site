import "../styles/App.css";
import LatestPost from "./LatestPost";
import AllPosts from "./AllPosts";

function Home(props) {
  const truncateText = (text) => {
    if (text.length > 200) return text.substring(0, 200) + " ...";
    else return text;
  };

  return (
    <div className="Home">
      <div className="content-container">
        <div className="latest-container">
          <h2>
            <i>Latest Post</i>
          </h2>
          {props.latestPost && (
            <LatestPost
              truncate={truncateText}
              post={props.latestPost}
              pic={props.pic}
            />
          )}
        </div>
        <div className="all-container">
          <h2>
            <i>All Posts</i>
          </h2>
          {props.allPosts && (
            <AllPosts truncate={truncateText} posts={props.allPosts} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
