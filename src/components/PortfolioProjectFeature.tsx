import { useState } from 'react'
import type { PortfolioProject } from '../types/portfolio'

type PortfolioProjectFeatureProps = {
  project: PortfolioProject
}

function PortfolioProjectFeature({
  project,
}: PortfolioProjectFeatureProps) {
  const [activeMediaIndex, setActiveMediaIndex] =
    useState(0)

  const activeMedia =
    project.media[activeMediaIndex]

  const showPreviousMedia = () => {
    setActiveMediaIndex((currentIndex) => {
      if (currentIndex === 0) {
        return project.media.length - 1
      }

      return currentIndex - 1
    })
  }

  const showNextMedia = () => {
    setActiveMediaIndex((currentIndex) => {
      if (
        currentIndex ===
        project.media.length - 1
      ) {
        return 0
      }

      return currentIndex + 1
    })
  }

  return (
    <article className="portfolio-project">
      <div className="portfolio-project__media">
        {activeMedia ? (
          <>
            {activeMedia.type === 'image' ? (
              <img
                src={activeMedia.src}
                alt={activeMedia.alt}
              />
            ) : (
              <video
                src={activeMedia.src}
                controls
                preload="metadata"
              />
            )}

            {project.media.length > 1 && (
              <div className="portfolio-project__media-controls">
                <button
                  type="button"
                  onClick={showPreviousMedia}
                  aria-label="Previous project media"
                >
                  ←
                </button>

                <span>
                  {activeMediaIndex + 1}
                  {' / '}
                  {project.media.length}
                </span>

                <button
                  type="button"
                  onClick={showNextMedia}
                  aria-label="Next project media"
                >
                  →
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="portfolio-project__media-empty">
            PROJECT MEDIA
          </div>
        )}
      </div>

      <div className="portfolio-project__content">
        <p className="portfolio-project__tech">
          <span className="portfolio-project__type">
            {project.type === 'solo'
              ? 'SOLO PROJECT'
              : 'TEAM PROJECT'}
          </span>

          {' / '}

          {project.tech.join(' / ')}
        </p>

        <h3>{project.title}</h3>

        <div className="portfolio-project__section">
          <p className="portfolio-project__label">
            OVERVIEW
          </p>

          <p className="portfolio-project__description">
            {project.description}
          </p>
        </div>

        {project.type === 'team' &&
          project.contribution && (
            <div className="portfolio-project__section">
              <p className="portfolio-project__label">
                MY CONTRIBUTION
              </p>

              <p className="portfolio-project__contribution">
                {project.contribution}
              </p>
            </div>
          )}

        {project.type === 'team' &&
          project.members &&
          project.members.length > 0 && (
            <div className="portfolio-project__section">
              <p className="portfolio-project__label">
                TEAM
              </p>

              <div className="portfolio-project__team">
                {project.members.map((member) => (
                  <span key={member}>
                    {member}
                  </span>
                ))}
              </div>
            </div>
          )}

        <div className="portfolio-project__section">
          <p className="portfolio-project__label">
            KEY SYSTEMS
          </p>

          <ul className="portfolio-project__highlights">
            {project.highlights.map(
              (highlight) => (
                <li key={highlight}>
                  {highlight}
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default PortfolioProjectFeature