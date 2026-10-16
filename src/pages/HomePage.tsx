import { Link } from 'react-router-dom'
import useSectionScroll from '../hooks/useSectionScroll'

function HomePage() {
  useSectionScroll(
    'main > section',
    0,
  )


  return (
    <div className="home-page">
      <header className="site-header">
        <a className="brand" href="#home">
          <span className="brand-mark" aria-hidden="true">
            DI
          </span>

          <span className="brand-name">
            Dragoon Interactive
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#team">Team</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-background" aria-hidden="true"></div>

          <div className="hero-content">
            <p className="section-label">
              01 / HOME
            </p>

            <h1>
              Dragoon
              <br />
              Interactive
            </h1>

            <p className="hero-tagline">
              Software, games, and interactive experiences.
            </p>
          </div>
        </section>

        <section id="projects">
          <p>02 / SELECTED WORK</p>

          <h2>Projects</h2>

          <article>
            <h3>StoryGame</h3>
            <p>Unity / C#</p>
          </article>

          <article>
            <h3>Dat's: Better Kanban</h3>
            <p>React / TypeScript</p>
          </article>
        </section>

        <section id="team">
          <p>03 / TEAM</p>

          <h2>Team</h2>

          <article>
            <Link to="/team/ruben">
              <h3>Ruben Becerril</h3>
              <p>Software Development</p>
            </Link>
          </article>

          <article>
            <h3>Samantha Matthews</h3>
            <p>Art / Animation / Development</p>
          </article>
        </section>

        <section id="about">
          <p>04 / ABOUT</p>

          <h2>About Dragoon Interactive</h2>
        </section>

        <section id="contact">
          <p>05 / CONTACT</p>

          <h2>Contact</h2>
        </section>
      </main>
    </div>
  )
}

export default HomePage