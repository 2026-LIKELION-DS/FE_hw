import React from "react";
import CommentListItem from "./CommentListItem";

function CommentList({ comments }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
            {comments.map((comment) => {
                return <CommentListItem key={comment.id} comment={comment} />;
            })}
        </div>
    );
}

export default CommentList;