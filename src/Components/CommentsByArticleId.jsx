import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../Api";

export const CommentsByArticleId = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState({});
  useEffect(() => {
    api.fetchCommentsByArticleId(article_id).then((articleData) => {
      setComments(articleData);
    });
  }, [article_id]);

  return <div></div>;
};
