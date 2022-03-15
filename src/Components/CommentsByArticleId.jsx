import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../Api";
import { DeleteComment } from "./DeleteComment";
import { PostComment } from "./PostComment";
import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";

export const CommentsByArticleId = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const { user } = useContext(UserContext);
  const [snackbar, setSnackbar] = useState("");

  useEffect(() => {
    api.fetchCommentsByArticleId(article_id).then((articleComments) => {
      setComments(articleComments);
    });
  }, [article_id]);

  const handleDeleteClick = (e, comment_id, author) => {
    e.preventDefault();
    setSnackbar("show");
    setTimeout(() => setSnackbar(""), 2000);
    api.deleteComments(comment_id, author).then(() => {
      setComments((comments) => {
        return comments.filter((comment) => {
          return comment.comment_id !== comment_id;
        });
      });
    });
  };
  return (
    <div>
      <PostComment setComments={setComments} />
      <div className={"snackbar " + snackbar}>Comment Deleted</div>
      {comments.map((comment) => {
        return (
          <div
            className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-60 fit"
            key={comment.comment_id}
          >
            <p className="bc gb">{comment.author}</p>
            <p className="lh-copy measure center f6 black-70">{comment.body}</p>

            <p>{comment.created_at}</p>
            {user.username === comment.author ? (
              <DeleteComment
                handleDeleteClick={handleDeleteClick}
                comment_id={comment.comment_id}
                author={comment.author}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};
