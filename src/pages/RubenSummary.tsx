import PortfolioHeader from '../components/PortfolioHeader'

function RubenSummary() {
  return (
    <div className="portfolio-page">
      <PortfolioHeader
        name="Ruben Becerril"
        initials="RB"
        basePath="/team/ruben"
      />

      <main className="portfolio-main">
        <section className="portfolio-summary">
          <div className="portfolio-summary__content">
            <p className="portfolio-eyebrow">
              RUBEN BECERRIL
            </p>

            <h1>Summary</h1>

            <p className="portfolio-summary__text">
              Software developer focused on building scalable systems,
              interactive applications, web software, and game development
              tools.
            </p>
          </div>

          <div className="portfolio-photo-large">
            PHOTO
          </div>
        </section>
      </main>
    </div>
  )
}

export default RubenSummary