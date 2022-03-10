import { useState } from "react";
import * as api from "../Api";
import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export const AddComment = ({ setComments }) => {
  const { article_id } = useParams();
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState({ username: "", body: "" });
  const [isPosting, setIsPosting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPosting(true);
    api.postComments(article_id, newComment).then((commentData) => {
      setComments((currComment) => {
        return [commentData, ...currComment];
      });
      setNewComment({ username: "", body: "" });
      setIsPosting(false);
    });
  };

  if (isPosting) return <p>...loading</p>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="addComment"> Add Comment:</label>
        <input
          className="textbox"
          type="text"
          id="addComment"
          value={newComment.body}
          onChange={(e) => {
            setNewComment({ username: user.username, body: e.target.value });
          }}
          required
        ></input>
        <button className="postbttn" type="submit">
          Post
        </button>
      </form>
    </div>
  );
};
