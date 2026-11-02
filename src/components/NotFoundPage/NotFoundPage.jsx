import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <main className="not-found">
      <img
        className="not-found__image"
        src={`${import.meta.env.BASE_URL}vocabulary-not-found-character.png`}
        alt="A confused student wondering where the page went"
      />
      <h1 className="not-found__heading">Page not found</h1>
      <Link className="not-found__link" to="/">
        Back to home
      </Link>
    </main>
  );
}

export default NotFoundPage;
