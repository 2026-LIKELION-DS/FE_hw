// map() 이용

import React from "react";
import CommentListItem from "./CommentListItem";

function CommentList({ comments }) {
    return (
        <div className="comment-list">
            {comments.map((comment) => {
                return <CommentListItem key={comment.id} comment={comment} />;
            })}
        </div>
    );
}

export default CommentList;