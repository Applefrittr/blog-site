import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Comment from "./Comment";

function Comments() {
  const formRef = useRef();
  const btnRef = useRef();
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      const request = await fetch(
        `http://blog-api-production-4951.up.railway.app/posts/${id}/comments`,
        { mode: "cors", method: "GET" }
      );

      const response = await request.json();

      let commentArray = [];
      response.comments.forEach((comment) => {
        console.log(comment);
        commentArray.push(
          <Comment
            author={comment.author}
            text={comment.text}
            key={comment._id}
            date={comment.dated_formatted}
          />
        );
      });

      setComments(commentArray);
    };

    getComments();
  }, []);

  const displayForm = () => {
    formRef.current.classList.toggle("display");
    btnRef.current.classList.toggle("hide");
  };

  const submitComment = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const dataObj = Object.fromEntries(formData.entries());

    const request = await fetch(
      `http://blog-api-production-4951.up.railway.app/posts/${id}/comments`,
      {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(dataObj),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const response = await request.json();
    console.log(response.message);

    // reset form and toggle display
    formRef.current.reset();
    displayForm();

    // update the comments with the newly submitted comment
    let updateComments = [...comments];
    updateComments.unshift(
      <Comment author={dataObj.author} text={dataObj.text} date={"Now"} />
    );
    setComments(updateComments);
  };

  return (
    <div className="comments-element">
      <h3>Comments</h3>
      <button
        className="nav-links display-comment-btn"
        onClick={displayForm}
        ref={btnRef}
      >
        Add Comment
      </button>
      <form className="comments-form" ref={formRef}>
        <input
          type="text"
          placeholder="username"
          style={{ width: "250px" }}
          name="author"
        ></input>
        <input type="text" placeholder="add a comment..." name="text"></input>
        <div className="comments-buttons">
          <button type="button" className="nav-links" onClick={displayForm}>
            Cancel
          </button>
          <button type="submit" className="nav-links" onClick={submitComment}>
            Comment
          </button>
        </div>
      </form>
      <div className="comments-container">{comments}</div>
    </div>
  );
}

export default Comments;
