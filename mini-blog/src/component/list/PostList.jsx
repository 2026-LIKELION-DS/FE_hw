import React from 'react'
import {Link} from "react-router-dom";
import styled from 'styled-components';
import { useState, useEffect } from "react";

const TitleDiv = styled.div`
    border:1px solid black;
    padding: 10px;
    margin:10px;
    border-radius:10px;
    width:900px;
`;

const LinkStyle = styled(Link)`
    text-decoration:none;
    color:black;
`;

function DummyData(){

    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3001/posts")
        .then((res)=>res.json())
        .then((data)=>setPosts(data));
    }, []);

    return(
        <div>
        {posts.map((post)=>(
            <LinkStyle to = {`/post/${post.id}`} key={post.id}>
            <TitleDiv>{post.title}</TitleDiv>
            </LinkStyle>
        ))}
        </div>
    );
}
export default function PostList() {
    return (
        <div>
            <DummyData />

        </div>
    );
}
