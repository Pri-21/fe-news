import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";

export const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <Link to="/users">
        <h2>{user.username === "noUser" ? "User" : user.username}</h2>
      </Link>
    </div>
  );
};
