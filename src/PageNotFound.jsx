import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h1>The page you are looking for is not found</h1>
      <Link className="link" to="/staff">
        Back to Home
      </Link>
    </div>
  );
}

export default PageNotFound;
