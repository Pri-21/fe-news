import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as api from "../Api";
import { ErrorPage } from "./ErrorPage";
import {Header} from "./Header"

export const Topics = () => {
  const [topicInfo, setTopicInfo] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);

    api
      .fetchTopics()
      .then((topicData) => {
        setTopicInfo(topicData);
        setIsLoading(false);
      })
      .catch(
        ({
          response: {
            data: { msg },
            status,
          },
        }) => {
          setError({ msg, status });
          setIsLoading(false);
        }
      );
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <ErrorPage status={error.status} msg={error.msg} />;

  return (
    <>
    <Header title={"Topics"} />
    <div className="topicList">
      {topicInfo.map((topic) => {
        return (
          <Link to={`/topic/${topic.slug}`} className="Link" key={topic.slug}>
            <h4 className="topicSlugs bc">{topic.slug}</h4>
          </Link>
        );
      })}
    </div>
    </>
  );
};
