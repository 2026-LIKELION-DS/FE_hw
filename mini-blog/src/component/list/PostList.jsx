import PostListItem from "./PostListItem";
import { Link } from "react-router-dom";

export default function PostList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Link to={`/post/${post.id}`}>
          <div key={post.id}>
            <PostListItem post={post} />
          </div>
        </Link>
      ))}
    </div>
  );
}
