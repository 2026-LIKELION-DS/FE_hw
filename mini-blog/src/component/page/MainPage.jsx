import React from "react";
import { useNavigate } from "react-router-dom";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from "../../db/data.json"; 

function MainPage() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>소플의 미니 블로그</h1>
            <Button title="글 작성하기" onClick={() => navigate("/post-write")} />
            <PostList 
                posts={data} 
                onClickItem={(item) => navigate(`/post/${item.id}`)} 
            />
        </div>
    );
}
export default MainPage;