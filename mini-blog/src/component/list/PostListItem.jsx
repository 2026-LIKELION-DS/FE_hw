function PostListItem({ post, onClick }) {
  return (
    <div className="post-item" onClick={onClick}>
      {post.title}
    </div>
  );
}

export default PostListItem;

