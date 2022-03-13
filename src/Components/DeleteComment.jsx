import * as api from "../Api";

export const DeleteComment = ({ comment_id, setComments, author }) => {
  const handleClick = (e) => {
    e.preventDefault();
    api.deleteComments(comment_id, author).then(() => {
      alert("Your comment is being deleted");
      setComments((comments) => {
        return comments.filter((comment) => {
          return comment.comment_id !== comment_id;
        });
      });
    });
  };

  return (
    <div>
      <button className="deletebttn" onClick={handleClick}>
        Delete
      </button>
    </div>
  );
};
