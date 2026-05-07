import React from 'react'
import {Link, useParams} from "react-router-dom";
import styled from 'styled-components';
import {useState} from "react";
import { useEffect, useRef } from "react";

const DummyContainer1 = styled.div`
    border:1px solid black;
    padding: 10px;
    border-radius:10px;
`;
const DummyTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    padding:5px;
    margin-bottom:10px;
`;
const DummyContent=styled.div`
    padding:5px;
    margin-bottom:10px;
`;

const AllComment = styled.p`
    font-size: 18px;
    font-weight:bold;
    padding:10px 20px 0 10px;
`;

const PostIn = styled.div`
    margin:10px;
`;
const CommentContent = styled.div`
    border:1px solid black;
    padding: 8px;
    margin-top:5px;
    border-radius:10px;
`;
const TextareaComment = styled.textarea`
    margin:10px;
    width: 100%;
    box-sizing: border-box;
    margin: 10px 0 5px 0;
    height:60px;
`;
const CommentButton = styled.button`
    padding: 5px 10px;
    border:none;
    border-radius:10px;
    cursor:pointer;
`;
export default function CommentList() {
const { id } = useParams();

    const commentRef = useRef();
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
            fetch(`http://localhost:3001/posts/${id}`)
            .then((res)=>res.json())
            .then((data)=>setPosts([data]));
    }, [id]);

    const CommentFunction = (e) => {
        const newComment = {
            id: Date.now(),
            content: commentRef.current.value,
        }
        const updateComment = [...posts[0].comments, newComment];
        fetch(`http://localhost:3001/posts/${id}`, {
            method:"PATCH",
            body: JSON.stringify({
                comments: updateComment,
            }),
        });
        setPosts([{...posts[0], comments: updateComment}]);
    };

  return (
    <div>
        {posts.map((post)=>(
                post.id === id && ( <PostIn key={post.id}>
                    <DummyContainer1><DummyTitle>{post.title}</DummyTitle>
                    <DummyContent>{post.content}</DummyContent>
                    </DummyContainer1>
                    <AllComment>댓글</AllComment>
                    {post.comments.map((comment)=>(
                        <CommentContent key={comment.id}>
                            {comment.content}
                        </CommentContent>
                    ))}
                    <TextareaComment ref={commentRef} placeholder="댓글을 입력하세요"></TextareaComment>
                    <CommentButton onClick={
                        CommentFunction
                    }>댓글 작성하기</CommentButton>
                </PostIn>)
            ))}

    </div>
  )
}
