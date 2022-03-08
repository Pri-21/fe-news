import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div>
      <Link to="/" className="Link"><h1 className="Header">News</h1></Link>
    </div>
  );
};
