import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as api from "../Api";
export const Topics = () => {
  const [topicInfo, setTopicInfo] = useState([]);
  useEffect(() => {
    api.fetchTopics().then((topicData) => {
      setTopicInfo(topicData);
    });
  }, []);

  return (
    <div>
      {topicInfo.map((topic) => {
        return (
          <Link to={`/${topic.slug}`} className="Link" key={topic.slug}>
            <h4 className="topicSlugs">{topic.slug}</h4>
          </Link>
        );
      })}
    </div>
  );
};
