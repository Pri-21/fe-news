export const DeleteComment = ({
  comment_id,
  author,
  handleDeleteClick,
}) => {
  return (
    <div>
      <button
        className="deletebttn"
        onClick={(e) => handleDeleteClick(e, comment_id, author)}
      >
        Delete
      </button>
    </div>
  );
};
