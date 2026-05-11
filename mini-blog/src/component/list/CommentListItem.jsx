export default function CommentListItem({ comment }) {
  return (
    <>
      <div>
        <p className="comment_content">{comment.content}</p>
      </div>
    </>
  );
}
