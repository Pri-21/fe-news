import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../Api";
import {Vote} from "./Vote"

export const Article = () => {
  const { article_id } = useParams();
  const [articleInfo, setArticleInfo] = useState({});
  useEffect(() => {
    api.fetchArticleById(article_id).then((articleData) => {
      setArticleInfo(articleData);
    });
  }, [article_id]);
  return (
    <div className="article">
      <h3>{articleInfo.title}</h3>
      <p>{articleInfo.body}</p>
      <p>By: {articleInfo.author}</p>
      <p>Comments: {articleInfo.comment_count}</p>
      <p>Votes: <Vote />  {articleInfo.votes}</p>
      <p>{articleInfo.topic}</p>
    </div>
  );
};
