import { useEffect, useState } from "react";
import * as api from "../Api";
import { ArticleCard } from "./ArticleCard";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    api.fetchArticles().then((articleData) => {
      setArticles(articleData);
    });
  }, []);

  return (
    <div>
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </div>
  );
};
