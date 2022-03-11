import { useEffect, useState } from "react";
import * as api from "../Api";
import { ArticleCard } from "./ArticleCard";
import { SortBy } from "./SortBy";
export const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("desc");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.fetchArticles(sortBy, orderBy).then((articleData) => {
      setArticles(articleData);
      setIsLoading(false);
    });
  }, [sortBy, orderBy]);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <>
      <SortBy
        setSortBy={setSortBy}
        selectedValue={sortBy}
        chosenValue={orderBy}
        setOrderBy={setOrderBy}
      />
      <div>
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </div>
    </>
  );
};
