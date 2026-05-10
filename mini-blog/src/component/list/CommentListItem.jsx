import React from "react";
import styled from "styled-components";

const CommentUI = styled.div`
    padding: 8px 16px; 
    border: 2px solid lightgrey; 
    border-radius: 8px;
    // margin:  auto;
    width: 95%;
`

const CommentText =styled.p`
    fontSize: 16px;
    margin: 0;
`

function CommentListItem({ comment }) {
    return (
        <CommentUI>
            <CommentText>{comment.content}</CommentText>
        </CommentUI>
    );
}

export default CommentListItem;