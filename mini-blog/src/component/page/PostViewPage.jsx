import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import data from "../../db/data.json";

import styled from "styled-components";

const PostUI =styled.div`
    padding: 16px;
    border: 2px solid lightgrey;
    border-radius: 8px;
    // margin: auto;
    width:95%;
`
const CommentText = styled.h3`
  font-size: 20px;
  font-weight: bold;
  
`

const CommentWrapper = styled.div`
  // margin: auto;
`

const TextUI = styled.div`
  // margin: auto;
`




function PostViewPage() {
  const navigate = useNavigate();
  const { postId } = useParams();

  //const [title, setTitle] = useState("");
  //const [content, setContent] = useState("");
  const [isLoading, setLoading] = useState(false);
  

  const post = data.posts.find((item) => {
    return item.id === postId;
  });

  const [comment, setComment] = useState("");
  
  const handleCommentSubmit = () => {
    if (isLoading) return;
    setLoading(true);

    if(comment.trim() === "") {
      alert("내용을 입력해주세요!");
      return;
    }

    fetch(`http://localhost:3001/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comments: [
          ...post.comments,
          {id: Date.now(), content: comment}
        ],
      }),
    })
      .then((res) => {
        if (res.ok) {
          alert("댓글이 등록되었습니다!");
          // setIsDone((prev) => !prev);
          setComment("");
          navigate(0);
        }
      })
      // .finally(() => {
      //   setLoading(false);
      // });
  };

  return (
    <div
      style={{
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div>
        <Button title="뒤로 가기" onClick={() => navigate("/")} />
      </div>

      <PostUI>
        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>{post.title}</h2>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.6",
            whiteSpace: "pre-wrap",
          }}
        >
          {post.content}
        </p>
      </PostUI>

      <CommentWrapper>
        <CommentText>댓글</CommentText>

        <CommentList comments={post.comments} />
      </CommentWrapper>

      <div>
        <TextUI>
          <TextInput
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder="댓글을 입력하세요..."
          />
        </TextUI>
        <div>
          <Button title="댓글 작성하기" onClick={handleCommentSubmit} />
        </div>
      </div>
    </div>
  );
}

export default PostViewPage;
