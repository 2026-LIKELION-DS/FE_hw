import { useNavigate } from "react-router-dom";
import PostList from "../list/PostList";
import Button from "../ui/Button";

function MainPage({ posts }) {
  const navigate = useNavigate();

  return (
    <div className="container">
      <Button title="글 작성하기" onClick={() => navigate("/write")} />

      <h1 className="title">소플의 미니 블로그</h1>

      <PostList
        posts={posts}
        onClickItem={(post) => navigate(`/post/${post.id}`)}
      />
    </div>
  );
}

export default MainPage;