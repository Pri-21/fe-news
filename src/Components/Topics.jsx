import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as api from "../Api";
import { ErrorPage } from "./ErrorPage";

export const Topics = () => {
  const [topicInfo, setTopicInfo] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    api
      .fetchTopics()
      .then((topicData) => {
        setTopicInfo(topicData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Topic not found");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error)
    return (
      <h3>
        {error} <ErrorPage />
      </h3>
    );

  return (
    <div className="topicList">
      {topicInfo.map((topic) => {
        return (
          <Link to={`/topic/${topic.slug}`} className="Link" key={topic.slug}>
            <h4 className="topicSlugs bc">{topic.slug}</h4>
          </Link>
        );
      })}
    </div>
  );
};
