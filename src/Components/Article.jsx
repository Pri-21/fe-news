import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../Api";

export const Article = () => {
  const { article_id } = useParams();
  const [articleInfo, setArticleInfo] = useState({});
  useEffect(() => {
    api.fetchArticleById(article_id).then((articleData) => {
      setArticleInfo(articleData);
    });
  }, []);
  return (
    <div className="article">
      <h3>{articleInfo.title}</h3>
      <p>{articleInfo.body}</p>
      <p>By: {articleInfo.author}</p>
      <p>comments: {articleInfo.comment_count}</p>
      <p>votes: {articleInfo.votes}</p>
      <p>{articleInfo.topic}</p>
    </div>
  );
};
