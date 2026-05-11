import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from '../ui/Button';
import PostList from "../list/PostList";

export default function MainPage(props) {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
    .then((res) => res.json())
    .then((data) => {
      setPosts(data); 
    });
  }, []);
  
  return (
    <div className="wrapper">
      <container className="container">
        <Button title="글 작성하기" onClick={() => { navigate("/post-write");}}/>

        <h1>소플의 미니 블로그</h1>

        <div>
          <PostList posts={posts} />
        </div>
      </container>
    </div>
  );
}
