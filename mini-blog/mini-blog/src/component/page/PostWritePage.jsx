import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostWritePage({addPost}) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="container">
      <h3 className="BlogHeader">소플의 미니 블로그</h3>
      <textarea className="contentTitle" placeholder="글 제목" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <textarea className="contentCompo" placeholder="내용을 입력하세요" value={content} onChange={(e) => setContent(e.target.value)}/>
      
      <button className="WritingBtn" onClick={() => {
        addPost(title, content);
        navigate("/"); 
      }}>
        글 작성하기
      </button>
    </div>
  );
}

export default PostWritePage;