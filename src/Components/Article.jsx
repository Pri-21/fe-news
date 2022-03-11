import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../Api";
import { CommentsByArticleId } from "./CommentsByArticleId";
import { Vote } from "./Vote";

export const Article = () => {
  const { article_id } = useParams();
  const [articleInfo, setArticleInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    api.fetchArticleById(article_id).then((articleData) => {
      setArticleInfo(articleData);
      setIsLoading(false);
    });
  }, [article_id]);
  if (isLoading) return <h2>Loading...</h2>;
  return (
    <div className="article">
      <h3>{articleInfo.title}</h3>
      <p>{articleInfo.body}</p>
      <p>By: {articleInfo.author}</p>
      <Vote articleInfo={articleInfo} />
      <p>{articleInfo.topic}</p>
      <p>Comments: {articleInfo.comment_count}</p>
      <CommentsByArticleId />
    </div>
  );
};
