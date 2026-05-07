import React from "react";

function CommentListItem({ comment }) {
    return (
        <div style={{ padding: "8px 16px", border: "1px solid lightgrey", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
            <p style={{ fontSize: "16px", margin: "0" }}>{comment.content}</p>
        </div>
    );
}

export default CommentListItem;