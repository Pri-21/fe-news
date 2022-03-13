import { useState } from "react";
import * as api from "../Api";
import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";

export const PostComment = ({ setComments }) => {
  const { article_id } = useParams();
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState({ username: "", body: "" });
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPosting(true);
    api
      .postComments(article_id, newComment)
      .then((commentData) => {
        setComments((currComment) => {
          return [commentData, ...currComment];
        });
        setNewComment({ username: "", body: "" });
        setIsPosting(false);
      })
      .catch(
        ({
          response: {
            data: { msg },
            status,
          },
        }) => {
          setError({ msg, status });
          setIsPosting(false);
        }
      );
  };

  if (isPosting) return <p>Loading...</p>;
  if (error)
    return (
      <div className="loginError">
        <h3>You must be logged in to post a comment</h3>
        <Link to="/users" className="loginlink">
          <h3> Login here</h3>
        </Link>
      </div>
    );

  return (
    <div>
      <form className="pa4 black-80" onSubmit={handleSubmit}>
        <label className="f6 b db mb2" htmlFor="addComment">
          {" "}
          Add Comment:
        </label>
        <input
          className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2 lh-copy measure center f6 black-70"
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
