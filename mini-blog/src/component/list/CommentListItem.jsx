function CommentListItem({ comment }) {
  return (
    <div className="comment-item">
      {comment.content}
    </div>
  );
}

export default CommentListItem;