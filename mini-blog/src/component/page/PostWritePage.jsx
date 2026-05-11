import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '../ui/Button';
import TextInput from "../ui/TextInput";

export default function PostWritePage(props) {
    const navigate = useNavigate();

    const [title, addTitle] = useState("");
    const [content, addContent] = useState("");

    const PostSubmit = () => {
        if (title.trim() === "" || content.trim() === "") return;

        const newPost = {
            title: title,
            content: content,
            comments: []
        };

        fetch("http://localhost:3001/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        })

        alert("생성이 완료되었습니다!");
        navigate("/");
    };

    return (
        <div className="wrapper">
            <div className="container">
                <h1>소플의 미니 블로그</h1>
                
                <TextInput className="text_input"
                    height="50px" 
                    value={title} 
                    onChange={(e) => addTitle(e.target.value)} 
                    placeholder="제목을 입력하세요" 
                />
                
                <TextInput className="text_input"
                    height="400px" 
                    value={content} 
                    onChange={(e) => addContent(e.target.value)} 
                    placeholder="내용을 입력하세요" 
                />

                <Button title="글 작성하기" onClick={ PostSubmit } />
            </div>
        </div>
    );
}
