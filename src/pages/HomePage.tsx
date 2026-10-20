import { Link } from 'react-router-dom'
import useSmoothSections from '../hooks/useSmoothSections'

function HomePage() {
  const { activeScreen } = useSmoothSections({
    wrapperSelector: '.home-page',
    contentSelector: '.home-page main',
    sectionSelector: 'section',
  })

  return (
    <div className="home-page">
      <header className="site-header">
        <a className="brand" href="#home">
          <img
            className="brand-logo"
            src="/dragooninteractiveLogo.png"
            alt=""
            aria-hidden="true"
          />

          <span className="brand-name">
            Dragoon Interactive
          </span>
        </a>

        <nav
          className="site-nav"
          aria-label="Primary navigation"
        >
          <a
            href="#home"
            className={
              activeScreen.id === 'home'
                ? 'active'
                : undefined
            }
          >
            Home
          </a>

          <a
            href="#projects"
            className={
              activeScreen.id === 'projects'
                ? 'active'
                : undefined
            }
          >
            Work
          </a>

          <a
            href="#services"
            className={
              activeScreen.id === 'services'
                ? 'active'
                : undefined
            }
          >
            Services
          </a>

          <a
            href="#team"
            className={
              activeScreen.id === 'team'
                ? 'active'
                : undefined
            }
          >
            Team
          </a>

          <a
            href="#about"
            className={
              activeScreen.id === 'about'
                ? 'active'
                : undefined
            }
          >
            About
          </a>

          <a
            href="#contact"
            className={
              activeScreen.id === 'contact'
                ? 'active'
                : undefined
            }
          >
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="hero-section"
        >
          <div
            className="hero-background"
            aria-hidden="true"
          />

          <div className="hero-content">
            <p className="section-label">
              01 / DRAGOON INTERACTIVE
            </p>

            <h1>
              Dragoon
              <br />
              Interactive
            </h1>

            <p className="hero-tagline">
              Software, games, and interactive
              experiences built around scalable
              systems and long-term development.
            </p>

            <div className="hero-actions">
              <a
                href="#projects"
                className="home-button home-button--primary"
              >
                Selected Work
              </a>

              <Link
                to="/team/ruben"
                className="home-button"
              >
                Ruben's Portfolio
              </Link>
            </div>
          </div>

          <div className="hero-index" aria-hidden="true">
            <span>DI / 2026</span>
            <span>SOFTWARE + GAMES</span>
          </div>
        </section>

        <section
          id="projects"
          className="home-section home-projects"
        >
          <div className="home-section__heading">
            <p>02 / SELECTED WORK</p>
            <h2>Projects</h2>

            <p className="home-section__intro">
              Current software and game projects
              developed through Dragoon Interactive.
            </p>
          </div>

          <div className="home-project-grid">
            <article className="home-project-card">
              <div className="home-project-card__index">
                01 / SOFTWARE
              </div>

              <div className="home-project-card__body">
                <p className="home-project-card__status">
                  RELEASED / V1.0
                </p>

                <h3>
                  Dat's:
                  <br />
                  Better Kanban
                </h3>

                <p className="home-project-card__description">
                  A customizable project-management
                  application with Google Drive
                  persistence, collaboration,
                  conflict-aware synchronization,
                  attachments, and interactive 3D
                  previews.
                </p>
              </div>

              <div className="home-project-card__footer">
                <span>
                  REACT / TYPESCRIPT / GOOGLE DRIVE
                </span>

                <a
                  href="https://datsbetterkanban.dragooninteractive.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Project ↗
                </a>
              </div>
            </article>

            <article className="home-project-card">
              <div className="home-project-card__index">
                02 / GAME
              </div>

              <div className="home-project-card__body">
                <p className="home-project-card__status">
                  IN DEVELOPMENT
                </p>

                <h3>Story Game</h3>

                <p className="home-project-card__description">
                  An ongoing Unity RPG focused on
                  reusable gameplay architecture,
                  character systems, inventory,
                  equipment, combat, persistence,
                  and support for varied character
                  designs.
                </p>
              </div>

              <div className="home-project-card__footer">
                <span>UNITY / C#</span>

                <Link to="/team/ruben">
                  Development Portfolio →
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section
          id="services"
          className="home-section home-services"
        >
          <div className="home-section__heading">
            <p>03 / SERVICES</p>

            <h2>Services</h2>

            <p className="home-section__intro">
              Have an idea, feature, bug, or application
              you want built? Send over what you need and
              we can talk through whether it is a good fit,
              what would be involved, and what it may cost.
            </p>
          </div>

          <div className="home-services__content">
            <div className="home-services__grid">
              <article className="home-service-card">
                <span className="home-service-card__number">
                  01
                </span>

                <h3>Web Development</h3>

                <p>
                  React and TypeScript applications,
                  interfaces, APIs, authentication,
                  integrations, and custom software.
                </p>

                <span className="home-service-card__price">
                  PRICE / BASED ON SCOPE
                </span>
              </article>

              <article className="home-service-card">
                <span className="home-service-card__number">
                  02
                </span>

                <h3>Features & Fixes</h3>

                <p>
                  Smaller additions, bug fixes,
                  improvements, integrations, or changes
                  to an existing application.
                </p>

                <span className="home-service-card__price">
                  SMALL PROJECTS / LOWER COST
                </span>
              </article>

              <article className="home-service-card">
                <span className="home-service-card__number">
                  03
                </span>

                <h3>Unity Game Development</h3>

                <p>
                  Unity and C# gameplay development including
                  architecture, inventory, interaction, combat,
                  persistence, and related gameplay systems.
                </p>

                <span className="home-service-card__price">
                  PRICE / BASED ON COMPLEXITY
                </span>
              </article>
            </div>

            <div className="home-services__inquiry">
              <div>
                <p className="home-services__label">
                  NOT SURE IF IT IS DOABLE?
                </p>

                <p className="home-services__inquiry-text">
                  Send a description of what you want.
                  There is no need to know the technical
                  details first. We can discuss the idea,
                  expected work, possible approaches, and
                  a rough price before anything is started.
                </p>
              </div>

              <div className="home-services__contact-options">
                <div>
                  <span>CASUAL</span>
                  <strong>Discord / Casual Chat</strong>

                  <p>
                    Good for talking through an idea,
                    asking questions, or figuring out the
                    scope informally. We can move to Discord
                    after initial contact.
                  </p>
                </div>

                <div>
                  <span>PROFESSIONAL</span>
                  <strong>Email / Upwork</strong>
                  <p>
                    Better for formal project details,
                    quotes, files, timelines, and paid work.
                  </p>
                </div>
              </div>

              <div className="home-services__actions">
                <a
                  href="mailto:rubenbecerril.rb@gmail.com"
                  className="home-button home-button--primary"
                >
                  Email Project Idea
                </a>

                <a
                  href="https://www.upwork.com/freelancers/~01a4fd3e41986f7dba"
                  target="_blank"
                  rel="noreferrer"
                  className="home-button"
                >
                  Upwork Profile
                </a>

                <a
                  href="https://www.upwork.com/services/product/development-it-a-custom-react-and-typescript-web-application-2110490046871661907?ref=fl_profile"
                  target="_blank"
                  rel="noreferrer"
                  className="home-button"
                >
                  Upwork Services & Prices
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="team"
          className="home-section home-team"
        >
          <div className="home-section__heading">
            <p>04 / TEAM</p>
            <h2>Team</h2>

            <p className="home-section__intro">
              Meet the team behind Dragoon Interactive and its projects.
            </p>
          </div>

          <div className="home-team-grid">
            <Link
              to="/team/ruben"
              className="home-team-card home-team-card--link"
            >
              <span className="home-team-card__number">
                01
              </span>

              <div>
                <h3>Ruben Becerril</h3>
                <p>
                  Software / Systems Development
                </p>
              </div>

              <span className="home-team-card__action">
                View Portfolio →
              </span>
            </Link>

            <div className="home-team-card">
              <span className="home-team-card__number">
                02
              </span>

              <div>
                <h3>Samantha Matthews</h3>
                <p>
                  Art / Animation / Development
                </p>
              </div>

              <span className="home-team-card__action">
                Portfolio coming later
              </span>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="home-section home-about"
        >
          <div className="home-section__heading">
            <p>05 / ABOUT</p>
            <h2>
              About
              <br />
              D.I.
            </h2>
          </div>

          <div className="home-about__content">
            <p className="home-about__lead">
              Dragoon Interactive is a small
              independent studio focused on software,
              games, and interactive projects.
            </p>

            <p>
              Our work ranges from production web
              applications to reusable gameplay
              systems. The goal is to build projects
              with strong foundations that can
              continue growing instead of being
              designed only around short-term
              prototypes.
            </p>

            <div className="home-about__principles">
              <div>
                <span>01</span>
                <strong>Scalable Systems</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Interactive Software</strong>
              </div>

              <div>
                <span>03</span>
                <strong>Long-Term Development</strong>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="home-section home-contact"
        >
          <div>
            <p>06 / CONTACT</p>

            <h2>
              Let's build
              <br />
              something.
            </h2>
          </div>

          <div className="home-contact__content">
            <p>
              Available for software development,
              freelance projects, collaboration,
              and project inquiries.
            </p>

            <a
              className="home-contact__email"
              href="mailto:rubenbecerril.rb@gmail.com"
            >
              rubenbecerril.rb@gmail.com
            </a>

            <div className="home-contact__links">
              <Link to="/team/ruben">
                Portfolio
              </Link>

              <a
                href="https://github.com/DatRuben"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/ruben-becerril-/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://www.upwork.com/freelancers/~01a4fd3e41986f7dba"
                target="_blank"
                rel="noreferrer"
              >
                Upwork Profile
              </a>

              <a
                href="https://www.upwork.com/services/product/development-it-a-custom-react-and-typescript-web-application-2110490046871661907?ref=fl_profile"
                target="_blank"
                rel="noreferrer"
              >
                Upwork Services & Prices
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomePage