import React from "react";

function CommentListItem({ comment }) {
    return (
        <div style={{ padding: "8px 16px", border: "2px solid lightgrey", borderRadius: "8px" }}>
            <p style={{ fontSize: "16px", margin: "0" }}>{comment.content}</p>
        </div>
    );
}

export default CommentListItem;