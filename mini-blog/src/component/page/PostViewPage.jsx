import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import CommentList from "../list/CommentList";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";

function PostViewPage({ posts, setPosts }) {
  const { postId } = useParams();
  const navigate = useNavigate();

  const [comment, setComment] = useState("");

  const post = posts.find(
    (item) => String(item.id) === String(postId)
  );

  if (!post) {
    return <div>잘못된 접근입니다.</div>;
  }

  function addComment() {
    if (comment.trim() === "") return;

    const newComment = {
      id: Date.now(),
      content: comment,
    };

    const updatedPosts = posts.map((item) =>
      String(item.id) === String(postId)
        ? {
            ...item,
            comments: [...(item.comments || []), newComment],
          }
        : item
    );

    setPosts(updatedPosts);

    localStorage.setItem(
      "posts",
      JSON.stringify(updatedPosts)
    );

    setComment("");
  }

  return (
    <div className="container">

      <Button
        title="뒤로가기"
        onClick={() => navigate("/")}
      />

      <div className="post-view-box">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </div>

      <h3>댓글</h3>

      <CommentList comments={post.comments || []} />

      <TextInput
        className="comment-input"
        placeholder="댓글을 입력하세요"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <Button
        title="댓글 작성하기"
        onClick={addComment}
      />

    </div>
  );
}

export default PostViewPage;