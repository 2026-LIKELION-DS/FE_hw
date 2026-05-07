function PostListItem({ post, onClick }) {
    return (
        <div onClick={onClick} style={{ border: "1px solid grey", margin: "8px", cursor: "pointer" }}>
            <h3>{post.title}</h3>
        </div>
    );
}
export default PostListItem;