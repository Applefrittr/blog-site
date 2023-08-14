import "../styles/LatestPost.css";
import { Link } from "react-router-dom";

// Latest Post component will render the pic passed and latestPost props passed from App.js
function LatestPost(props) {
  return (
    <div className="latest-card">
      <img src={props.pic} alt="Movies"></img>
      {props.post && (
        <div className="info-container">
          <p>{props.post.dated_formatted}</p>
          <div className="title-text">
            <h2>{props.post.title}</h2>
            <p>{props.truncate(props.post.text)}</p>
            <Link to={props.post._id} className="nav-links post-link">
              Continue Reading
            </Link>
          </div>
          <p>
            By <span style={{ color: "rgb(0, 183, 255)" }}>apple</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default LatestPost;
