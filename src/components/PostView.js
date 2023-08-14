import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/PostView.css";

function PostView(props) {
  const [post, setPost] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getPost = async () => {
      const request = await fetch(`http://localhost:3000/posts/${id}`, {
        mode: "cors",
      });
      const response = await request.json();

      setPost(response.post);
    };

    getPost();
  }, []);

  const back = () => {
    navigate("/");
  };

  return (
    <div className="post-view-container">
      {post && (
        <div className="post-view-content">
          <div>
            <h1>{post.title}</h1>
            <div className="date-author-subheader">
              <p>{post.dated_formatted}</p>
              <p>
                By <span style={{ color: "rgb(0, 183, 255)" }}>apple</span>
              </p>
            </div>
            <hr></hr>
          </div>
          <p style={{ whiteSpace: "pre-wrap" }}>{post.text}</p>
        </div>
      )}
      <button className="nav-links" onClick={back}>
        Back
      </button>
    </div>
  );
}

export default PostView;
