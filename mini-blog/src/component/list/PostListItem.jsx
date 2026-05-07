function PostListItem({ post, onClick }) {
    return (
        <div onClick={onClick} style={{ border: "2px solid lightgrey", margin: "30px", cursor: "pointer", borderRadius:"20px", paddingLeft:"40px", paddingTop:"10px", paddingBottom:"10px" }}>
            <h3>{post.title}</h3>
        </div>
    );
}
export default PostListItem;