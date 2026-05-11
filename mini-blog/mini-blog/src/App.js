import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./component/page/MainPage"; 
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";
import initialData from "./db/data.json";
import "./App.css";

function App() {

  const [posts, setPosts] = useState(initialData.posts);
    const addPost = (title, content) => {
        const newPost = {
            id: posts.length + 1,
            title: title,
            content: content,
            comments: []
        };
        setPosts([newPost, ...posts]); 
    };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage posts={posts}/>} />
        
        <Route path="/write" element={<PostWritePage addPost={addPost}/>} />

        <Route path="/post/:postId" element={<PostViewPage posts={posts}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
