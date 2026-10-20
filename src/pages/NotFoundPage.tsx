import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="not-found-page">
      <div className="not-found-page__content">
        <p className="not-found-page__code">
          404 / PAGE NOT FOUND
        </p>

        <h1>
          Nothing
          <br />
          here.
        </h1>

        <p className="not-found-page__text">
          The page you were looking for does not
          exist or may have moved.
        </p>

        <Link
          to="/"
          className="not-found-page__link"
        >
          Return to Dragoon Interactive →
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage