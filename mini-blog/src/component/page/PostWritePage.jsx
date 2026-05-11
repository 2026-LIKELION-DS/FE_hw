import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";
import TextInput from "../ui/TextInput";

function PostWritePage({ posts, setPosts }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function addPost() {
    if (title.trim() === "" || content.trim() === "") return;

    const newPost = {
      id: Date.now(),
      title,
      content,
      comments: [],
    };

    const updatedPosts = [...posts, newPost];

    setPosts(updatedPosts);

    localStorage.setItem(
      "posts",
      JSON.stringify(updatedPosts)
    );

    navigate("/");
  }

  return (
    <div className="container">

      <h1 className="title">
        소플의 미니 블로그
      </h1>

      <TextInput
        className="title-input"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <TextInput
        className="content-input"
        placeholder="내용을 입력하세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <Button
        title="글 작성하기"
        onClick={addPost}
      />

    </div>
  );
}

export default PostWritePage;