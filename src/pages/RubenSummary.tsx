import ExperienceTabs from '../components/ExperienceTabs'
import PortfolioHeader from '../components/PortfolioHeader'
import useSmoothSections from '../hooks/useSmoothSections'

function RubenSummary() {
  useSmoothSections({
    wrapperSelector: '.portfolio-scroll',
    contentSelector: '.portfolio-main',
    sectionSelector: 'section',
  })

  return (
    <div className="portfolio-page">
      <PortfolioHeader
        name="Ruben Becerril"
        initials="RB"
      />

      <div className="portfolio-scroll">
        <main className="portfolio-main">
          <section
            id="summary"
            className="portfolio-summary"
          >
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

          <section
            id="experience"
            className="portfolio-section"
          >
            <p className="portfolio-eyebrow">
              EXPERIENCE
            </p>

            <h2>Experience</h2>

            <ExperienceTabs />
          </section>

          <section
            id="info"
            className="portfolio-section"
          >
            <p className="portfolio-eyebrow">
              INFO
            </p>

            <h2>Info</h2>

            <p className="portfolio-section__text">
              Resume and contact information will go here.
            </p>
          </section>
        </main>
      </div>
    </div>
  )
}

export default RubenSummary