import DevelopmentExperience from '../components/DevelopmentExperience'
import ExperienceHeader from '../components/ExperienceHeader'
import PortfolioHeader from '../components/PortfolioHeader'
import WorkExperience from '../components/WorkExperience'
import useSmoothSections from '../hooks/useSmoothSections'
import PortfolioScrollIndicator from '../components/PortfolioScrollIndicator'
import { useState } from 'react'
import type {
  ExperienceMode,
} from '../types/portfolio'
import ContactDetails from '../components/ContactDetails'

function RubenSummary() {
  const [
    experienceMode,
    setExperienceMode,
  ] = useState<ExperienceMode>(
    'development',
  )

  const changeExperienceMode = (
    mode: ExperienceMode,
  ) => {
    setExperienceMode(mode)

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document
          .getElementById('experience')
          ?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
      })
    })
  }

  const {
    activeScreen,
    screens,
  } = useSmoothSections({
    wrapperSelector: '.portfolio-scroll',
    contentSelector: '.portfolio-main',
    sectionSelector: '[data-scroll-screen]',
    refreshKey: experienceMode,
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
        activeType={experienceMode}
        onTypeChange={changeExperienceMode}
      />

      <PortfolioScrollIndicator
        screens={screens}
        activeScreenId={activeScreen.id}
        experienceMode={experienceMode}
        onExperienceModeChange={
          changeExperienceMode
        }
      />

      <div className="portfolio-scroll">
        <main className="portfolio-main">
          <section
            id="summary"
            className="portfolio-summary"
            data-scroll-screen
            data-scroll-label="Summary"
            data-nav-section="summary"
          >
            <div className="portfolio-summary__content">
              <p className="portfolio-eyebrow">
                RUBEN BECERRIL / SOFTWARE DEVELOPER
              </p>

              <h1>Software Developer</h1>

              <p className="portfolio-summary__text">
                Computer Science graduate with hands-on experience building
                and deploying applications using React, TypeScript, C#, C++,
                JavaScript, Python, and SQL. I focus on scalable software
                architecture, interactive applications, API integration,
                debugging, and long-term maintainability.
              </p>

              <p className="portfolio-summary__focus-label">
                CORE AREAS
              </p>

              <div className="portfolio-summary__focus">
                <div>
                  <span>01</span>
                  <p>Web Applications</p>
                </div>

                <div>
                  <span>02</span>
                  <p>Unity Game Development</p>
                </div>

                <div>
                  <span>03</span>
                  <p>API Integration</p>
                </div>

                <div>
                  <span>04</span>
                  <p>Self-Hosting / Deployment</p>
                </div>
              </div>
            </div>

            <aside className="portfolio-summary__profile">
              <div className="portfolio-summary__photo-shell">
                <img
                  className="portfolio-summary__photo"
                  src="/RubenPhoto.jpg"
                  alt="Portrait of Ruben Becerril"
                />
              </div>

              <p className="portfolio-summary__profile-label">
                PROFILE
              </p>

              <div className="portfolio-summary__profile-item">
                <span>LOCATION</span>
                <strong>San Antonio, Texas</strong>
              </div>

              <div className="portfolio-summary__profile-item">
                <span>EDUCATION</span>
                <strong>B.S. Computer Science</strong>
                <small>Minor in Mathematics</small>
              </div>

              <div className="portfolio-summary__profile-item">
                <span>FOCUS</span>
                <strong>Software + Game Development</strong>
              </div>

              <div className="portfolio-summary__profile-item">
                <span>STATUS</span>
                <strong>Open to Opportunities</strong>
              </div>
            </aside>
          </section>

          {experienceMode === 'development' ? (
            <DevelopmentExperience />
          ) : (
            <WorkExperience />
          )}

          <section
            id="info"
            className="portfolio-section portfolio-info"
            data-scroll-screen
            data-scroll-label="Info"
            data-nav-section="info"
          >
            <div className="portfolio-info__heading">
              <p className="portfolio-eyebrow">
                INFO / CONTACT
              </p>

              <h2>Info</h2>

              <p className="portfolio-info__intro">
                Additional technical background, education,
                and ways to reach me.
              </p>
            </div>

            <div className="portfolio-info__grid">
              <div className="portfolio-info__block">
                <p className="portfolio-info__label">
                  LANGUAGES
                </p>

                <p>
                  C# / C++ / TypeScript / JavaScript /
                  Python / SQL / C / HTML / CSS
                </p>
              </div>

              <div className="portfolio-info__block">
                <p className="portfolio-info__label">
                  TECHNOLOGIES
                </p>

                <p>
                  React / Vite / Unity / Google Drive API /
                  Google OAuth / REST APIs
                </p>
              </div>

              <div className="portfolio-info__block">
                <p className="portfolio-info__label">
                  DEVELOPMENT
                </p>

                <p>
                  Git / GitHub / Object-Oriented Programming /
                  API Integration / Debugging / Version Control
                </p>
              </div>

              <div className="portfolio-info__block">
                <p className="portfolio-info__label">
                  DEPLOYMENT
                </p>

                <p>
                  Caddy / Cloudflare Tunnel / HTTPS /
                  Self-Hosting
                </p>
              </div>

              <div className="portfolio-info__block portfolio-info__education">
                <p className="portfolio-info__label">
                  EDUCATION
                </p>

                <strong>
                  St. Mary's University
                </strong>

                <p>
                  Bachelor of Science in Computer Science
                </p>

                <p>
                  Minor in Mathematics / December 2024
                </p>
              </div>

              <div className="portfolio-info__block portfolio-info__contact">
                <p className="portfolio-info__label">
                  CONTACT
                </p>

                <ContactDetails
                  tone="light"
                  showResume
                />
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  )
}

export default RubenSummary