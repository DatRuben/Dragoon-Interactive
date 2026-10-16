import DevelopmentExperience from '../components/DevelopmentExperience'
import ExperienceHeader from '../components/ExperienceHeader'
import PortfolioHeader from '../components/PortfolioHeader'
import WorkExperience from '../components/WorkExperience'
import useSmoothSections from '../hooks/useSmoothSections'
import PortfolioScrollIndicator from '../components/PortfolioScrollIndicator'

function RubenSummary() {
  const {
    activeScreen,
    screens,
  } = useSmoothSections({
    wrapperSelector: '.portfolio-scroll',
    contentSelector: '.portfolio-main',
    sectionSelector: '[data-scroll-screen]',
  })

  return (
    <div className="portfolio-page">
      <PortfolioHeader
        name="Ruben Becerril"
        initials="RB"
        activeSection={activeScreen.navSection}
      />

      <ExperienceHeader
        visible={
          activeScreen.navSection === 'experience'
        }
        activeType={
          activeScreen.experienceType
        }
      />

      <PortfolioScrollIndicator
        screens={screens}
        activeScreenId={activeScreen.id}
      />

      <div className="portfolio-scroll">
        <main className="portfolio-main">
          <section
            id="summary"
            className="portfolio-summary"
            data-scroll-screen
            data-scroll-label="Summary"
            data-scroll-group="Portfolio"
            data-scroll-subtitle="Overview"
            data-nav-section="summary"
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

          <DevelopmentExperience />

          <WorkExperience />

          <section
            id="info"
            className="portfolio-section"
            data-scroll-screen
            data-scroll-label="Info"
            data-scroll-group="Portfolio"
            data-scroll-subtitle="Resume / Contact"
            data-nav-section="info"
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