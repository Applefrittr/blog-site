import { useState } from "react";
import "../styles/PostCard.css";
import { Link } from "react-router-dom";

function PostCard(props) {
  const [post, setPost] = useState(props.post);

  return (
    <div className="card">
      <h2>{post.title}</h2>
      <p>{props.truncate(post.text)}</p>
      <div className="card-date-button-container">
        <p>{post.dated_formatted}</p>
        <Link to={post._id} className="nav-links post-link">
          Continue Reading
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
