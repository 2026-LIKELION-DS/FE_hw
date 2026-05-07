import React from "react";
import { useNavigate } from "react-router-dom";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from "../../db/data.json"; 
// import styled from "styled-components";

// const Wrapper = styled.div`
// `

function MainPage() {
    const navigate = useNavigate();

    return (
        <div>
            <Button title="글 작성하기" onClick={() => navigate("/post-write")} style={{ border:"none", backgroundColor:"gray" }} />
            <h1 style={{ textAlign:"center", paddingTop:"20px", paddingBottom:"20px"}}>소플의 미니 블로그</h1>
            <PostList 
                posts={data.posts} 
                onClickItem={(item) => navigate(`/post/${item.id}`)} 
            />
        </div>

        
    );

    
}
export default MainPage;