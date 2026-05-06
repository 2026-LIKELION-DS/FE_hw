import { useParams, useNavigate } from "react-router-dom";
import data from "../../db/data.json";

function PostViewPage() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const post = data.posts.find((item) => String(item.id) === String(postId));

  if (!post) {
    return <div>잘못된 접근입니다.</div>;
  }

  return (
    <div className="container">
      <button 
      className="write-button"
      onClick={() => navigate("/")}>뒤로가기
      </button>

      <div className="post-view-box">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </div>

      <h3>댓글</h3>

      <div className="comment-list">
        {post.comments.map((comment) => (
          <div key={comment.id} className="comment-item">
            {comment.content}
          </div>
        ))}
      </div>

      <textarea
        className="comment-input"
        placeholder="댓글을 입력하세요"
      />

      <button className="comment-button">댓글 작성하기</button>
    </div>
  );
}

export default PostViewPage;