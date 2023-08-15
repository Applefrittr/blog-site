import "../styles/Comment.css";
import User from "../assets/user.png";

function Comment(props) {
  return (
    <div className="comment">
      <img src={User} className="comment-img" alt="user"></img>
      <div className="comment-text">
        <p>
          <b>@{props.author}</b>
        </p>
        <p>{props.text}</p>
        <p className="date">
          <i>{props.date}</i>
        </p>
      </div>
    </div>
  );
}

export default Comment;
