import {
  useRef,
  useState,
} from 'react'

import type {
  PortfolioProject,
} from '../types/portfolio'

type PortfolioProjectFeatureProps = {
  project: PortfolioProject
}

function PortfolioProjectFeature({
  project,
}: PortfolioProjectFeatureProps) {
  const [
    activeMediaIndex,
    setActiveMediaIndex,
  ] = useState(0)

  const [
    videoPlaying,
    setVideoPlaying,
  ] = useState(false)

  const videoRef =
    useRef<HTMLVideoElement | null>(null)

  const activeMedia =
    project.media[activeMediaIndex]

  const presentation =
    project.presentation ?? 'media'

  const showPreviousMedia = () => {
    setVideoPlaying(false)

    setActiveMediaIndex(
      (currentIndex) => {
        if (currentIndex === 0) {
          return project.media.length - 1
        }

        return currentIndex - 1
      },
    )
  }

  const showNextMedia = () => {
    setVideoPlaying(false)

    setActiveMediaIndex(
      (currentIndex) => {
        if (
          currentIndex ===
          project.media.length - 1
        ) {
          return 0
        }

        return currentIndex + 1
      },
    )
  }

  const playVideo = () => {
    void videoRef.current?.play()
  }

  return (
    <article className="portfolio-project">
      {presentation === 'current-site' ? (
        <div className="portfolio-project__current-site">
          <p className="portfolio-project__current-label">
            CURRENT SITE / LIVE
          </p>

          <strong>
            You're viewing it.
          </strong>

          <p>
            This portfolio and the surrounding
            Dragoon Interactive website are the
            work being presented here.
          </p>
        </div>
      ) : (
        <div className="portfolio-project__media">
          {activeMedia ? (
            <>
              <div className="portfolio-project__media-stage">
                {activeMedia.type ===
                  'image' ? (
                  <img
                    src={activeMedia.src}
                    alt={activeMedia.alt}
                  />
                ) : (
                  <>
                    <video
                      key={activeMedia.src}
                      ref={videoRef}
                      src={activeMedia.src}
                      controls
                      playsInline
                      preload="metadata"
                      onPlay={() =>
                        setVideoPlaying(true)
                      }
                      onPause={() =>
                        setVideoPlaying(false)
                      }
                      onEnded={() =>
                        setVideoPlaying(false)
                      }
                    />

                    {!videoPlaying && (
                      <button
                        type="button"
                        className="portfolio-project__video-play"
                        onClick={playVideo}
                        aria-label="Play project video"
                      >
                        <span aria-hidden="true">
                          ▶
                        </span>

                        <span>
                          Play Video
                        </span>
                      </button>
                    )}
                  </>
                )}
              </div>

              <div className="portfolio-project__media-caption">
                {activeMedia.caption}
              </div>

              <div className="portfolio-project__media-controls">
                {project.media.length > 1 ? (
                  <button
                    type="button"
                    onClick={
                      showPreviousMedia
                    }
                    aria-label="Previous project media"
                  >
                    ← Previous
                  </button>
                ) : (
                  <span />
                )}

                <div className="portfolio-project__media-status">
                  <span>
                    {activeMedia.type ===
                      'video'
                      ? 'VIDEO'
                      : 'IMAGE'}
                  </span>

                  <strong>
                    {activeMediaIndex + 1}
                    {' / '}
                    {project.media.length}
                  </strong>

                  {activeMedia.type ===
                    'video' && (
                    <span>
                      {videoPlaying
                        ? 'PLAYING'
                        : 'PAUSED'}
                    </span>
                  )}
                </div>

                {project.media.length > 1 ? (
                  <button
                    type="button"
                    onClick={showNextMedia}
                    aria-label="Next project media"
                  >
                    Next →
                  </button>
                ) : (
                  <span />
                )}
              </div>
            </>
          ) : (
            <div className="portfolio-project__media-empty">
              PROJECT MEDIA
            </div>
          )}
        </div>
      )}

      <div className="portfolio-project__content">
        <p className="portfolio-project__tech">
          <span className="portfolio-project__type">
            {presentation === 'current-site'
              ? 'CURRENT WEBSITE'
              : project.type === 'solo'
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
                {project.members.map(
                  (member) => (
                    <span key={member}>
                      {member}
                    </span>
                  ),
                )}
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