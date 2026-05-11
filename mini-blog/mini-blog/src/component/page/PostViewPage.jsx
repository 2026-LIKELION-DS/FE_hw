import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CommentList from "../list/CommentList";

function PostViewPage({posts}) {
  const { postId } = useParams(); 
  const navigate = useNavigate();


  const post = posts.find((item) => String(item.id) === String(postId));

  const [comment, setComment] = useState("");
  const [localComments, setLocalComments] = useState(post ? post.comments : []);

  if (!post) {
    return (
        <div>
        <p>존재하지 않는 게시글입니다.</p>
        <button onClick={() => navigate("/")}>메인으로 돌아가기</button>
        </div>
    );
  }

  const handleCommentSubmit = () => {
    const newComment = {
        id: localComments.length + 1,
        content: comment,
    };


    setLocalComments([...localComments, newComment]);
    setComment(""); 
};

  return (
  <div>
    <div className="container">
      <button className="WritingBtn" onClick={() => navigate("/")}>
        뒤로가기
      </button>

      <div className="post-view-box">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    </div>

    <div className="boxForComment">
      <h2>댓글</h2>
      <CommentList comments={localComments} />

      <textarea className="comment-input" placeholder="댓글을 입력하세요" 
      value={comment} onChange={(e) => setComment(e.target.value)}/>
      
      <button className="comment-button" onClick={handleCommentSubmit}>댓글 작성하기</button>
    </div>
  </div>
  );
}

export default PostViewPage;