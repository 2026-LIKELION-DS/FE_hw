import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../db/data.json";
import Button from '../ui/Button';
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";

export default function PostViewPage(props) {
  const navigate = useNavigate();
  const { postId } = useParams();

  const post = data.posts.find((item) => {
    return item.id === postId;
  });

  const [comments, setComments] = useState(post.comments);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (newComment.trim() === "") return;

    const newId =
      comments.length > 0 ? comments[comments.length - 1].id + 1 : 1;
    const commentsAdded = {
      id: newId,
      content: newComment,
    };
    setComments([...comments, commentsAdded]);
    setNewComment("");
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Button title="뒤로가기" onClick={() => { navigate("/");}}/>

        <div className="post_container">
          <h2>{post.title}</h2>
          <p className="post_content">{post.content}</p>
        </div>

        <h3 className="comment_title">댓글</h3>
        <div>
          <CommentList comments={comments} />
        </div>

        <TextInput className="text_input"
          height="60px" 
          value={newComment} 
          onChange={(e) => setNewComment(e.target.value)} 
          placeholder="댓글을 입력하세요" 
        />
        <Button title="댓글 작성하기" onClick={addComment}/>
      </div>
    </div>
  );
}