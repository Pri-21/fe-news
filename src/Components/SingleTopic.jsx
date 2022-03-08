import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../Api";
import { Link } from "react-router-dom";
export const SingleTopic = () => {
  const { topic } = useParams();
  const [topicArticleInfo, setTopicArticleInfo] = useState([]);

  useEffect(() => {
    api.fetchArticleByTopics(topic).then((topicArticles) => {
      setTopicArticleInfo(topicArticles);
    });
  }, [topic]);

  return (
    <div>
      {topicArticleInfo.map((articles) => {
        return (
          <div className="topicArticles">
          <Link to={`/articles/${articles.article_id}`} className="Link"><h3>{articles.title}</h3></Link>
            <p>By: {articles.author}</p>
            <p>{articles.topic}</p>
            <p>Votes: {articles.votes}</p>
          </div>
        );
      })}
    </div>
  );
};
