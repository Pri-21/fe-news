import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";

export const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Link to="/users" className="Link">
        <h2 className="navbarUser">
          {user.username === "noUser" ? "User Login" : user.username}
        </h2>
      </Link>
      <Link to="/topics" className="Link">
        <h3 className="topicBttn">Topics</h3>
      </Link>
    </div>
  );
};
