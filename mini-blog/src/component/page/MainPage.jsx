import {Link} from 'react-router-dom'
import styled from 'styled-components';


// import {Link, useParams} from "react-router-dom";
import { useState, useEffect } from "react";

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;
const TextForm = styled.button`
    margin:10px;
    padding:5px;
    border-radius:10px;
    border:none;
    cursor:pointer;
`;
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


export default function MainPage() {
    return (
        <div>
            <Link to ="./PostWritePage">
            <TextForm>글 작성하기</TextForm>
            </Link>

        <Wrapper>
            <h2> 소플의 미니 블로그</h2>
            <DummyData />

            
            
            
            </Wrapper>
        </div>
    );
}
