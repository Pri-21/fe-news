import { Link } from "react-router-dom";
export const Header = ({title = "News"}) => {

  return (
    <div>
      <Link to="/" className="Link pa3 pa4-ns"><h1 className="link dim hc b f1 f-headline-ns tc db mb3 mb4-ns header">{title}</h1></Link>
    </div>
  );
};
