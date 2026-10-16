import { Link } from 'react-router-dom'

type PortfolioHeaderProps = {
  name: string
  initials: string
}

function PortfolioHeader({
  name,
  initials,
}: PortfolioHeaderProps) {
  return (
    <header className="portfolio-header">
      <Link to="/" className="portfolio-brand">
        <span className="portfolio-photo-placeholder">
          {initials}
        </span>

        <span>{name}</span>
      </Link>

      <nav
        className="portfolio-nav"
        aria-label={`${name} portfolio`}
      >
        <a href="#summary">Summary</a>
        <a href="#experience">Experience</a>
        <a href="#info">Info</a>
      </nav>
    </header>
  )
}

export default PortfolioHeader