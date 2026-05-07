import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import data from "../../db/data.json";

function PostViewPage() {
    const navigate = useNavigate();
    const { postId } = useParams(); 
    
    const [isShow, setIsShow] = useState("");
    const [isDone, setIsDone] = useState("");


    const post = data.posts.find((item) => {
        return item.id === postId;
    });

    const [comment, setComment] = useState("");

    fetch(`http://localhost:3001/posts`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                isDone: !isDone,
            }),
        }).then((res) => {
            if(res.ok) {
                setIsDone((prev) => !prev);
            }
        });
    
    
    return (
        <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ width:"70px" }}>
                <Button title="뒤로 가기" onClick={() => navigate("/")} />
            </div>
            
            <div style={{ padding: "16px", border: "2px solid lightgrey", borderRadius: "8px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>{post.title}</h2>
                <p style={{ fontSize: "18px", lineHeight: "1.6", whiteSpace: "pre-wrap" }}>
                    {post.content}
                </p>
            </div>

            
            <div>
                <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>댓글</h3>
                
                <CommentList comments={post.comments} />
            </div>

            
            <div style={{ marginTop: "20px" }}>
                <TextInput
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                    placeholder="댓글을 입력하세요..."
                />
                <div style={{ marginTop: "10px", textAlign: "right"}}>
                    <Button
                        title="댓글 작성하기"
                        onClick={() => {
                            alert("댓글이 등록되었습니다!");
                            setComment("");
                        }}
                    />
                </div>
            </div>
        </div>
    );

    
}

export default PostViewPage;