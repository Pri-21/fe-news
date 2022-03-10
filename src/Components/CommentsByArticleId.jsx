import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../Api";
import { AddComment } from "./AddComment";

export const CommentsByArticleId = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    api.fetchCommentsByArticleId(article_id).then((articleComments) => {
      setComments(articleComments);
    });
  }, [article_id]);

  return (
    <div>
      <AddComment setComments={setComments} />
      {comments.map((comment) => {
        return (
          <div className="commentsArticle" key={comment.comment_id}>
            <p>{comment.body}</p>
            <p>{comment.author}</p>
            <p>{comment.created_at}</p>
          </div>
        );
      })}
    </div>
  );
};
