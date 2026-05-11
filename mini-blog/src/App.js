import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import data from "./db/data.json";

import MainPage from "./component/page/MainPage";
import PostViewPage from "./component/page/PostViewPage";
import PostWritePage from "./component/page/PostWritePage";

function App() {
  const savedPosts = localStorage.getItem("posts");

  const [posts, setPosts] = useState(
    savedPosts ? JSON.parse(savedPosts) : data.posts
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage posts={posts} />} />
        <Route
          path="/post/:postId"
          element={<PostViewPage posts={posts} setPosts={setPosts} />}
        />
        <Route
          path="/write"
          element={<PostWritePage posts={posts} setPosts={setPosts} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
