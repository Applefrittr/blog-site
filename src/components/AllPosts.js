import { useEffect, useState } from "react";
import PostCard from "./PostCard";

function AllPosts(props) {
  const [allPosts, setAllPosts] = useState();

  useEffect(() => {
    let allPostsArray = [];
    props.posts.forEach((post) => {
      allPostsArray.push(
        <PostCard post={post} truncate={props.truncate} key={post._id} />
      );
    });

    setAllPosts(allPostsArray);
  }, []);

  return <div className="card-container">{allPosts}</div>;
}

export default AllPosts;
