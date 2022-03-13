import { Link } from "react-router-dom";

export const ErrorPage = ({message}) => {
  return (
    <div>
      <Link to="/" className="loginlink">
        <h3>{message}</h3>
        <h3>Return to HomePage</h3>
      </Link>
    </div>
  );
};
