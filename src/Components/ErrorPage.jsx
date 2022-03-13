import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div>
      <Link to="/" className="loginlink">
        <h3>Return to HomePage</h3>
      </Link>
    </div>
  );
};
