import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../Api";
import { Link } from "react-router-dom";
import { SortBy } from "./SortBy";
import { Header } from "./Header";

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
    } else {
      setIsLoading(true);
      api
        .fetchArticleByTopics()
        .then((topicArticles) => {
          setTopicArticleInfo(topicArticles);
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
    }
  }, [topic, sortBy, orderBy]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <ErrorPage status={error.status} msg={error.msg} />;
  return (
    <>
    <Header title={"Articles"} />
      <SortBy
        setSortBy={setSortBy}
        selectedValue={sortBy}
        chosenValue={orderBy}
        setOrderBy={setOrderBy}
      />
      <div>
        {topicArticleInfo.map((articles) => {
          return (
            <div
              className="center mw5 mw6-ns br3 hidden ba b--black-60 mv4"
              key={articles.article_id}
            >
              <Link to={`/articles/${articles.article_id}`} className="Link">
                <h3 className="f4 bc br3 br--top black-60 mv0 pv2 ph3">
                  {articles.title}
                </h3>
              </Link>
              <div className="pa3 bt b--black-10 f6 f5-ns lh-copy measure">
                <p>By: {articles.author}</p>
                <p>{articles.topic}</p>
                <p>Votes: {articles.votes}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
