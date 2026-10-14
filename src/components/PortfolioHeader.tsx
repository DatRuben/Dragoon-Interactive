import { Link, NavLink } from 'react-router-dom'

type PortfolioHeaderProps = {
  name: string
  initials: string
  basePath: string
}

function PortfolioHeader({
  name,
  initials,
  basePath,
}: PortfolioHeaderProps) {
  return (
    <header className="portfolio-header">
      <Link to="/" className="portfolio-brand">
        <span className="portfolio-photo-placeholder">
          {initials}
        </span>

        <span>{name}</span>
      </Link>

      <nav className="portfolio-nav" aria-label={`${name} portfolio`}>
        <NavLink to={basePath} end>
          Summary
        </NavLink>

        <NavLink to={`${basePath}/experience`}>
          Experience
        </NavLink>

        <NavLink to={`${basePath}/info`}>
          Info
        </NavLink>
      </nav>
    </header>
  )
}

export default PortfolioHeader