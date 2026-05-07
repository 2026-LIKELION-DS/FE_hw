import {Link} from 'react-router-dom'
import React from 'react'
import styled from 'styled-components';
import { useRef } from "react";

const TextareaDiv = styled.div`
    display:flex;
    flex-direction: column;
    gap:5px;
    width:900px;
`;
const Textarea1 = styled.textarea`
    height:50px;
    margin-bottom:3px;
`;
const Textarea2 = styled.textarea`
    height:300px;
    margin-bottom:5px;
`;
const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;
const LinkStyle = styled(Link)`
    width:900px;
    display:flex;
    justify-content:flex-start;
    text-decoration:none;
`;
const ButtonContent = styled.button`
    border:none;
    padding:5px 15px;
    border-radius:10px;
    cursor:pointer;
`;

export default function PostWritePage() {

    const postTitleRef = useRef();
    const postContentRef = useRef();


    const PostFunction = (e) => {
        const newText = { 
            id: Date.now(),
            title: postTitleRef.current.value,
            content: postContentRef.current.value,
            comments:[],
        };

        fetch(`http://localhost:3001/posts`, {
            method:"POST",
            body: JSON.stringify(newText),
        });

    };
    

    return (
        <div>
    <Wrapper>
    <h2> 소플의 미니 블로그</h2>

    <TextareaDiv>
    <Textarea1 placeholder="제목을 입력하세요" ref={postTitleRef}></Textarea1>
    <Textarea2 placeholder="내용을 입력하세요" ref={postContentRef}></Textarea2>
    </TextareaDiv>
    <LinkStyle to ="/">
        <ButtonContent onClick={PostFunction}>글 작성하기</ButtonContent>
    
    </LinkStyle>
    </Wrapper>


    </div>
    )
}
