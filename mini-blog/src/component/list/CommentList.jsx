import CommentListItem from "./CommentListItem";

function CommentList({ comments }) {
  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <CommentListItem
          key={comment.id}
          comment={comment}
        />
      ))}
    </div>
  );
}

export default CommentList;