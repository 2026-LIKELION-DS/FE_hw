import React from "react";
import { useNavigate } from "react-router-dom";
import PostList from "../list/PostList";

export default function MainPage({posts}) {

    const navigate = useNavigate();
    return (
    <div className="container">
        <button className="WritingBtn"
        onClick={() => navigate("/write")}>글 작성하기</button>

        <div className="box">
            <h1 className="BlogTitle">소플의 미니 블로그</h1>

            <PostList 
                    posts={posts} 
                    onClickItem={(post) => {
                        navigate(`/post/${post.id}`);
                    }}
            />
        </div>
    </div>
    )
}
