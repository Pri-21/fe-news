import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../Api";
import { CommentsByArticleId } from "./CommentsByArticleId";
import { Vote } from "./Vote";
import { ErrorPage } from "./ErrorPage";

export const Article = () => {
  const { article_id } = useParams();
  const [articleInfo, setArticleInfo] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    api
      .fetchArticleById(article_id)
      .then((articleData) => {
        setArticleInfo(articleData);
        setIsLoading(false);
        setError(null);
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
  }, [article_id]);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <ErrorPage status={error.status} msg={error.msg} />;

  return (
    <div className="center mw5 mw6-ns br3 hidden ba b--black-60 mv4">
      <h3 className="f4 bc br3 br--top black-60 mv0 pv2 ph3">
        {articleInfo.title}
      </h3>
      <div className="pa3 bt b--black-10 f6 f5-ns lh-copy measure">
        <p>{articleInfo.body}</p>
        <p>By: {articleInfo.author}</p>
        <Vote articleInfo={articleInfo} />
        <p>{articleInfo.topic}</p>
        <p>Comments: {articleInfo.comment_count}</p>
        <CommentsByArticleId />
      </div>
    </div>
  );
};
