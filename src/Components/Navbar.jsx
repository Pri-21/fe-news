import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";

export const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <Link to="/users" className="Link">
        <h2 className="navbarUser">{user.username === "noUser" ? "User" : user.username}</h2>
      </Link>
    </div>
  );
};
