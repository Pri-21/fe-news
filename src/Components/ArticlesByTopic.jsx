import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../Api";
import { Link } from "react-router-dom";
import { SortBy } from "./SortBy";

import { ErrorPage } from "./ErrorPage";
export const ArticlesByTopic = () => {
  const { topic } = useParams();
  const [topicArticleInfo, setTopicArticleInfo] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("desc");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    if (topic !== null) {
      api
        .fetchArticleByTopics(topic, sortBy, orderBy)
        .then((topicArticles) => {
          setTopicArticleInfo(topicArticles);
          setIsLoading(false);
        })
        .catch((err) => {
          setError("Topic not found");
          setIsLoading(false);
        });
    } else {
      setIsLoading(true);
      api
        .fetchArticleByTopics()
        .then((topicArticles) => {
          setTopicArticleInfo(topicArticles);
          setIsLoading(false);
        })
        .catch((err) => {
          setError("Topic not found");
          setIsLoading(false);
        });
    }
  }, [topic, sortBy, orderBy]);

  if (isLoading) return <h2>Loading...</h2>;
  if (error)
    return (
      <h2>
        {error} <ErrorPage/>
      </h2>
    );
  return (
    <>
      <SortBy
        setSortBy={setSortBy}
        selectedValue={sortBy}
        chosenValue={orderBy}
        setOrderBy={setOrderBy}
      />
      <div>
        {topicArticleInfo.map((articles) => {
          return (
            <div className="topicArticles" key={articles.article_id}>
              <Link to={`/articles/${articles.article_id}`} className="Link">
                <h3>{articles.title}</h3>
              </Link>
              <p>By: {articles.author}</p>
              <p>{articles.topic}</p>
              <p>Votes: {articles.votes}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
