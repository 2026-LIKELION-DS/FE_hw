export default function PostListItem({ post }) {
    return (
    <>
      <div>
        <p className="post_title">{post.title}</p>
      </div>
    </>
  );
}