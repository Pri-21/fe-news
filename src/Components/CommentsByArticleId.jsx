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
  useEffect(() => {
    api.fetchCommentsByArticleId(article_id).then((articleComments) => {
      setComments(articleComments);
    });
  }, [article_id]);

  return (
    <div>
      <PostComment setComments={setComments} />

      {comments.map((comment) => {
        return (
          <div className="commentsArticle" key={comment.comment_id}>
            <p>{comment.body}</p>
            <p>{comment.author}</p>
            <p>{comment.created_at}</p>
            {user.username === comment.author ? (
              <DeleteComment
                setComments={setComments}
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
