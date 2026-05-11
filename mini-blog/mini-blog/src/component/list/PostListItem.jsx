import React from "react";

function PostListItem({ post, onClick }) {
    return (
        <div 
            className="post-item" 
            onClick={onClick}
        >
            <h3>{post.title}</h3>
        </div>
    );
}

export default PostListItem;