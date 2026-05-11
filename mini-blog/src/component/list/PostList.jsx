import PostListItem from "./PostListItem";

function PostList({ posts, onClickItem }) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostListItem
          key={post.id}
          post={post}
          onClick={() => onClickItem(post)}
        />
      ))}
    </div>
  );
}

export default PostList;
