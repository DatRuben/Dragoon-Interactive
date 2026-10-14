function RubenSummary() {
  return (
    <>
      <header className="portfolio-header">
        <a href="/" className="portfolio-brand">
          <span className="portfolio-photo-placeholder">
            RB
          </span>

          <span>Ruben Becerril</span>
        </a>

        <nav className="portfolio-nav">
          <a href="/team/ruben">Summary</a>
          <a href="/team/ruben/experience">Experience</a>
          <a href="/team/ruben/info">Info</a>
        </nav>
      </header>

      <main>
        <section className="portfolio-summary">
          <div>
            <p className="section-label">
              RUBEN BECERRIL
            </p>

            <h1>Summary</h1>

            <p>
              Software developer focused on building scalable systems,
              interactive applications, and game development tools.
            </p>
          </div>

          <div className="portfolio-photo-large">
            Photo
          </div>
        </section>
      </main>
    </>
  )
}

export default RubenSummary