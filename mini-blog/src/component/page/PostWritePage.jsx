import {Link} from 'react-router-dom'
import React from 'react'
import styled from 'styled-components';

const TextareaDiv = styled.div`
    display:flex;
    flex-direction: column;
    gap:5px;
`;
const Textarea2 = styled.textarea`
    height:300px;
    margin-bottom:10px;
`;


export default function PostWritePage() {
    return (
    <div>
    <h2> 소플의 미니 블로그</h2>

    <TextareaDiv>
    <textarea placeholder="제목을 입력하세요"></textarea>
    <Textarea2 placeholder="내용을 입력하세요"></Textarea2>
    </TextareaDiv>
    <Link to ="/">
    <button>글 작성하기</button>
    </Link>

    </div>
    )
}
