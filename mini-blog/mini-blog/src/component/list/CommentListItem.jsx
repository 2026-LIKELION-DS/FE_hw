import React from "react";

function CommentListItem({ comment }) {
    return (
        <div className="comment-item">
            <p>{comment.content}</p>
        </div>
    );
}

export default CommentListItem;