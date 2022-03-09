import { useState } from "react";
import * as api from "../Api";

export const Vote = ({ articleInfo }) => {
  const [counter, setCounter] = useState(0);

  const handleLikeClick = (article_id, inc_votes) => {
    setCounter((currCount) => currCount + 1);
    api.patchVotes(article_id, inc_votes).then((updatedArticle) => {
      return { ...articleInfo, updatedArticle: inc_votes };
    });
  };

  const handleUnlikeClick = (article_id, inc_votes) => {
    setCounter((currCount) => currCount - 1);
    api.patchVotes(article_id, inc_votes).then((updatedArticle) => {
      return { ...articleInfo, updatedArticle: inc_votes };
    });
  };

  return (
    <div>
      <p>Votes: {articleInfo.votes + counter}</p>
      <button
        disabled={counter === -1}
        onClick={() => handleUnlikeClick(articleInfo.article_id, -1)}
      >
        -
      </button>
      <span>{counter}</span>
      <button
        disabled={counter === 1}
        onClick={() => handleLikeClick(articleInfo.article_id, 1)}
      >
        +
      </button>
    </div>
  );
};
