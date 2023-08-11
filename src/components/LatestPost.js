import { useEffect, useState } from "react";
import "../styles/LatestPost.css";

// Latest Post component will fetch an image from UnSpash as well as the latest blog post using the blog-API and display in a card
function LatestPost() {
  const [pic, setPic] = useState();
  const [post, setPost] = useState();

  useEffect(() => {
    // fetch request to UnSplash API to retrieve photos tagged with "movies"
    const fetchPic = async () => {
      const picture = await fetch(
        `https://api.unsplash.com/search/photos?query=movies&orientation=landscape&client_id=xHyBjjGOjpWTD91jlwrkDarW_bLp1zpMRCNS7qyE37k`,
        { mode: "cors" }
      );
      const picData = await picture.json();

      // Since our fetch request will return data on hundreds of photos with the "movies" tag, pick one at random from the first 10
      const num = Math.floor(Math.random() * 10);
      const randomImg = picData.results[num];

      setPic(randomImg.urls.regular);
    };

    // fetch all posts from the Blog-API and return the most recent post to be displayed
    const fetchPost = async () => {
      const allPosts = await fetch("http://localhost:3000/posts", {
        mode: "cors",
      });
      const allPostsData = await allPosts.json();
      const latestPost = allPostsData.allPosts[0];

      setPost(latestPost);
    };

    fetchPic();
    fetchPost();
  }, []);

  const truncateText = (text) => {
    if (text.length > 200) return text.substring(0, 200) + " ...";
    else return text;
  };

  return (
    <div className="latest-card">
      <img src={pic} alt="Movies"></img>
      {post && (
        <div className="info-container">
          <p>{post.dated_formatted}</p>
          <div className="title-text">
            <h2>{post.title}</h2>
            <p>{truncateText(post.text)}</p>
            <button className="nav-links post-link">Continue Reading >></button>
          </div>
          <p>author: apple</p>
        </div>
      )}
    </div>
  );
}

export default LatestPost;
