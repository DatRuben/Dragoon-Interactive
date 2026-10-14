import PortfolioHeader from '../components/PortfolioHeader'

function RubenInfo() {
  return (
    <div className="portfolio-page">
      <PortfolioHeader
        name="Ruben Becerril"
        initials="RB"
        basePath="/team/ruben"
      />

      <main className="portfolio-main">
        <section className="portfolio-placeholder-page">
          <h1>Info</h1>
        </section>
      </main>
    </div>
  )
}

export default RubenInfo