import { Link } from "react-router-dom";

export const ArticleCard = ({ article }) => {
  return (
    <div className="articleCard">
      <Link to={`/articles/${article.article_id}`} className="Link">
        <h3>{article.title}</h3>
      </Link>
      <p>{article.body}</p>
      <h3>{article.author}</h3>
      <h3>{article.created_at}</h3>
      <h3>{article.votes}</h3>
    </div>
  );
};
