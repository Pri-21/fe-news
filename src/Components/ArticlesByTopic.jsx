import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../Api";
import { Link } from "react-router-dom";
import { SortBy } from "./SortBy";
export const ArticlesByTopic = () => {
  const { topic } = useParams();
  const [topicArticleInfo, setTopicArticleInfo] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("desc");
  
  useEffect(() => {
    if (topic !== null) {
      api.fetchArticleByTopics(topic, sortBy, orderBy).then((topicArticles) => {
        setTopicArticleInfo(topicArticles);
      });
    } else {
      api.fetchArticleByTopics().then((topicArticles) => {
        setTopicArticleInfo(topicArticles);
      });
    }
  }, [topic, sortBy, orderBy]);

  return (
    <>
     <SortBy
        setSortBy={setSortBy}
        selectedValue={sortBy}
        chosenValue={orderBy}
        setOrderBy={setOrderBy}/>
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
