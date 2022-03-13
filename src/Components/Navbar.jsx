import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";

export const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="bc">
      <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
        <Link to="/" className="Link">
          <h2 className="link dim dark-gray f6 f5-l dib mr3 mr4-l navNames">
            Home
          </h2>
        </Link>
        <Link to="/users" className="Link">
          <h2 className="link dim dark-gray f6 f5-l dib mr3 mr4-l navNames">
            {user.username === "noUser" ? "Login" : user.username}
          </h2>
        </Link>
        <Link to="/topics" className="Link">
          <h2 className="link dim dark-gray f6 f5-l dib mr3 mr4-l navNames">
            Topics
          </h2>
        </Link>
      </div>
    </nav>
  );
};
