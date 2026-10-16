import type {
  ScrollScreenInfo,
} from '../hooks/useSmoothSections'

type PortfolioScrollIndicatorProps = {
  screens: ScrollScreenInfo[]
  activeScreenId: string
}

function PortfolioScrollIndicator({
  screens,
  activeScreenId,
}: PortfolioScrollIndicatorProps) {
  if (screens.length === 0) {
    return null
  }

  const activeIndex = Math.max(
    screens.findIndex(
      (screen) =>
        screen.id === activeScreenId,
    ),
    0,
  )

  const activeScreen =
    screens[activeIndex]

  const summaryScreen =
    screens.find(
      (screen) =>
        screen.navSection === 'summary',
    )

  const infoScreen =
    screens.find(
      (screen) =>
        screen.navSection === 'info',
    )

  const developmentScreens =
    screens.filter(
      (screen) =>
        screen.navSection === 'experience' &&
        screen.experienceType === 'development',
    )

  const workScreens =
    screens.filter(
      (screen) =>
        screen.navSection === 'experience' &&
        screen.experienceType === 'work',
    )

  const experienceIsActive =
    activeScreen.navSection === 'experience'

  const developmentIsActive =
    activeScreen.experienceType ===
    'development'

  const workIsActive =
    activeScreen.experienceType === 'work'

  return (
    <aside
      className="portfolio-content-rail"
      aria-label="Portfolio navigation"
    >
      <div className="content-rail__status">
        <span className="content-rail__position">
          {String(activeIndex + 1).padStart(2, '0')}
          {' / '}
          {String(screens.length).padStart(2, '0')}
        </span>

        <span className="content-rail__current-title">
          {activeScreen.label}
        </span>
      </div>

      {summaryScreen && (
        <a
          href={`#${summaryScreen.id}`}
          className={
            activeScreen.navSection === 'summary'
              ? 'content-rail__main content-rail__main--active'
              : 'content-rail__main'
          }
        >
          <span className="content-rail__number">
            01
          </span>

          <span className="content-rail__title">
            Summary
          </span>

          <i />
        </a>
      )}

      <div className="content-rail__experience">
        <a
          href="#experience"
          className={
            experienceIsActive
              ? 'content-rail__main content-rail__main--active'
              : 'content-rail__main'
          }
        >
          <span className="content-rail__number">
            02
          </span>

          <span className="content-rail__title">
            Experience
          </span>

          <i />
        </a>

        <div className="content-rail__nested">
          <div className="content-rail__group">
            <a
              href="#experience"
              className={
                developmentIsActive
                  ? 'content-rail__group-title content-rail__group-title--active'
                  : 'content-rail__group-title'
              }
            >
              <span className="content-rail__number">
                01
              </span>

              <span className="content-rail__title">
                Development
              </span>

              <i />
            </a>

            <div className="content-rail__children">
              {developmentScreens.map(
                (screen, index) => (
                  <a
                    key={screen.id}
                    href={`#${screen.id}`}
                    className={
                      screen.id === activeScreen.id
                        ? 'content-rail__child content-rail__child--active'
                        : 'content-rail__child'
                    }
                  >
                    <span className="content-rail__number">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="content-rail__title">
                      {screen.label}
                    </span>

                    <i />
                  </a>
                ),
              )}
            </div>
          </div>

          <div className="content-rail__group">
            <a
              href="#work-experience"
              className={
                workIsActive
                  ? 'content-rail__group-title content-rail__group-title--active'
                  : 'content-rail__group-title'
              }
            >
              <span className="content-rail__number">
                02
              </span>

              <span className="content-rail__title">
                Work
              </span>

              <i />
            </a>

            <div className="content-rail__children">
              {workScreens.map(
                (screen, index) => (
                  <a
                    key={screen.id}
                    href={`#${screen.id}`}
                    className={
                      screen.id === activeScreen.id
                        ? 'content-rail__child content-rail__child--active'
                        : 'content-rail__child'
                    }
                  >
                    <span className="content-rail__number">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="content-rail__title">
                      {screen.label}
                    </span>

                    <i />
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      {infoScreen && (
        <a
          href={`#${infoScreen.id}`}
          className={
            activeScreen.navSection === 'info'
              ? 'content-rail__main content-rail__main--active'
              : 'content-rail__main'
          }
        >
          <span className="content-rail__number">
            03
          </span>

          <span className="content-rail__title">
            Info
          </span>

          <i />
        </a>
      )}
    </aside>
  )
}

export default PortfolioScrollIndicator