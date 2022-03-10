import { useState } from "react";
import * as api from "../Api";
import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export const AddComment = ({ setComments }) => {
  const { article_id } = useParams();
  const { user } = useContext(UserContext);
  const [body, setBody] = useState({ username: "", body: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    api.postComments(article_id, body).then((commentData) => {
      setComments((currComment) => {
        return [commentData, ...currComment];
      });
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="addComment"> Add Comment:</label>
        <input
          className="textbox"
          type="text"
          id="addComment"
          onChange={(e) => {
            setBody({ username: user.username, body: e.target.value });
          }}
        ></input>
        <button className="postbttn" type="submit">
          Post
        </button>
      </form>
    </div>
  );
};
