import { Link } from "react-router-dom";

export const ArticleCard = ({ article }) => {
  return (
    <div className="articleCard">
      <Link to={`/articles/${article.article_id}`} className="Link">
        <h3>{article.title}</h3>
      </Link>

      <h4>{article.author}</h4>
      <h4>{article.created_at.slice(0,10)}</h4>
      <h4>Votes: {article.votes}</h4>
      <h4>{article.topic}</h4>
    </div>
  );
};
