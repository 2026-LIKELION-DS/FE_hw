import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import styled from "styled-components";

const TextUI = styled.h2`
  margin: auto;
  width: 15%;
  padding-bottom: 20px;
  padding-top: 20px;
`

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
        comments: [],
      }),
    })
      .then((res) => {
        if (res.ok) {
          // setIsDone((prev) => !prev);
          navigate('/');
          alert("글 작성되었습니다!")
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
      <TextUI>소플의 미니 블로그</TextUI>

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
