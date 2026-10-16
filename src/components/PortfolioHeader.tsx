import { Link } from 'react-router-dom'

type PortfolioHeaderProps = {
  name: string
  initials: string
  activeSection: string
}

function PortfolioHeader({
  name,
  initials,
  activeSection,
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
        <a
          href="#summary"
          className={
            activeSection === 'summary'
              ? 'active'
              : undefined
          }
        >
          Summary
        </a>

        <a
          href="#experience"
          className={
            activeSection === 'experience'
              ? 'active'
              : undefined
          }
        >
          Experience
        </a>

        <a
          href="#info"
          className={
            activeSection === 'info'
              ? 'active'
              : undefined
          }
        >
          Info
        </a>
      </nav>
    </header>
  )
}

export default PortfolioHeader