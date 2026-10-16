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
          {project.tech.join(' / ')}
        </p>

        <h3>{project.title}</h3>

        <p className="portfolio-project__description">
          {project.description}
        </p>

        <p className="portfolio-project__role">
          {project.role}
        </p>
      </div>
    </article>
  )
}

export default PortfolioProjectFeature