import { Link } from "react-router-dom";

export const ArticleCard = ({ article }) => {
  return (
    <div className="center mw5 mw6-ns br3 hidden ba b--black-60 mv4">
      <Link to={`/articles/${article.article_id}`} className="Link">
        <h3 className="f4 bc br3 br--top black-60 mv0 pv2 ph3">
          {article.title}
        </h3>
      </Link>
      <div className="pa3 bt b--black-10 f6 f5-ns lh-copy measure">
        <h4>By: {article.author}</h4>
        <p>{article.created_at.slice(0, 10)}</p>
        <p>Votes: {article.votes}</p>
        <h5>{article.topic}</h5>
      </div>
    </div>
  );
};
