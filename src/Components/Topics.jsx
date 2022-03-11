import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as api from "../Api";

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
      .catch(({ data: { msg }, status }) => {
        console.log(msg, status);
        setError({ msg, status });
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <h2>Loading...</h2>;
  if (error)
    return (
      <h2>
        {error.status}: {error.msg}{" "}
      </h2>
    );

  return (
    <div>
      {topicInfo.map((topic) => {
        return (
          <Link to={`/topic/${topic.slug}`} className="Link" key={topic.slug}>
            <h4 className="topicSlugs">{topic.slug}</h4>
          </Link>
        );
      })}
    </div>
  );
};
