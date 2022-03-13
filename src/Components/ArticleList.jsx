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

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <SortBy
        setSortBy={setSortBy}
        selectedValue={sortBy}
        chosenValue={orderBy}
        setOrderBy={setOrderBy}
      />
      <div className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </div>
    </>
  );
};
