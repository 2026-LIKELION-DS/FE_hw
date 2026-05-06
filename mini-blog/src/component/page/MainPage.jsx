import { useNavigate } from "react-router-dom";
import data from "../../db/data.json";


function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="container">

        <button
        className="write-button"
        onClick={() => navigate("/write")}
      >
        글 작성하기
      </button>
      
      <h1 className="title">소플의 미니 블로그</h1>

      

      <div className="post-list">
        {data.posts.map((post) => (
          <div
            key={post.id}
            className="post-item"
            onClick={() => navigate(`/post/${post.id}`)}
          >
            {post.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;