import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

function PostWritePage() {
    const navigate = useNavigate();

    
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
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

            <Button
                title="글 작성 완료"
                onClick={() => {
                    alert("글이 등록되었습니다!");
                    navigate("/");
                }}
            />
        </div>
    );
}

export default PostWritePage;