import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

function PostWritePage() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setLoading] = useState(false);
  const onSubmit = () => {
    if (isLoading) return;
    setLoading(true);
    fetch(`http://localhost:3001/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content,
        comment: [],
      }),
    })
      .then((res) => {
        if (res.ok) {
          // setIsDone((prev) => !prev);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div
      style={{
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <h2>글 작성하기</h2>

      <TextInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력하세요"
      />

      <TextInput
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용을 입력하세요"
        multiLine={true}
      />

      <Button title="글 작성 완료" onClick={onSubmit} />
    </div>
  );
}

export default PostWritePage;
