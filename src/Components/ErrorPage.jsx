import { Link } from "react-router-dom";

export const ErrorPage = ({ status, msg }) => {
  return (
    <div className="errorPage">
      <h3>
        {status ? status : "404"}: {msg ? msg : "Page not found"}
      </h3>
      <Link to="/" className="loginlink">
        <h3>Return to Home</h3>
      </Link>
    </div>
  );
};
