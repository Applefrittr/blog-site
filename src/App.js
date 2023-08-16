import Home from "./components/Home";
import PostView from "./components/PostView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Git from "./assets/gitWHITE.png";

function App() {
  const [latestPost, setLatestPost] = useState();
  const [allPosts, setAllPosts] = useState();
  const [pic, setPic] = useState();

  // This useEffect will fetch post data from the blog's API as well as a template image from Unsplash (just to add a bit of flare)
  useEffect(() => {
    // blog-API fetch request
    const fetchPosts = async () => {
      const allPosts = await fetch("http://localhost:3000/posts", {
        mode: "cors",
      });
      const allPostsData = await allPosts.json();

      // filter out unpublished posts
      const publishedPosts = allPostsData.allPosts.filter(
        (post) => post.published === true
      );

      setLatestPost(publishedPosts[0]);
      setAllPosts(publishedPosts);
    };

    // Unsplash fetch request for an image tagged with "movies"
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

    fetchPic();
    fetchPosts();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <header className="nav-bar">
          <h1>Movies in Frame</h1>
          <button className="nav-links">Sign Up</button>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <Home latestPost={latestPost} allPosts={allPosts} pic={pic} />
            }
          />
          <Route path="/:id" element={<PostView />} />
        </Routes>
        <footer>
          Created August 2023 by Applefrittr
          <a
            href="https://github.com/Applefrittr"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Git} alt="GitHub Applefrittr" className="footer-img" />
          </a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
