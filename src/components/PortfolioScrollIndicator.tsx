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

  const foundIndex =
    screens.findIndex(
      (screen) =>
        screen.id === activeScreenId,
    )

  const activeIndex =
    foundIndex >= 0 ? foundIndex : 0

  const activeScreen =
    screens[activeIndex]

  const progress =
    screens.length > 1
      ? (activeIndex /
          (screens.length - 1)) *
        100
      : 100

  return (
    <aside
      className="portfolio-scroll-indicator"
      aria-label="Portfolio navigation"
    >
      <div className="scroll-indicator__heading">
        PORTFOLIO INDEX
      </div>

      <div className="scroll-indicator__current">
        <div className="scroll-indicator__meta">
          <span className="scroll-indicator__count">
            {String(activeIndex + 1).padStart(2, '0')}
            {' / '}
            {String(screens.length).padStart(2, '0')}
          </span>

          <span className="scroll-indicator__group">
            {activeScreen.group}
          </span>
        </div>

        <strong className="scroll-indicator__label">
          {activeScreen.label}
        </strong>

        {activeScreen.subtitle && (
          <span className="scroll-indicator__subtitle">
            {activeScreen.subtitle}
          </span>
        )}
      </div>

      <div className="scroll-indicator__progress">
        <div
          className="scroll-indicator__progress-fill"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <nav
        className="scroll-indicator__screens"
        aria-label="Portfolio screens"
      >
        {screens.map((screen, index) => {
          const isActive =
            index === activeIndex

          const isComplete =
            index < activeIndex

          let className =
            'scroll-indicator__screen'

          if (isActive) {
            className +=
              ' scroll-indicator__screen--active'
          } else if (isComplete) {
            className +=
              ' scroll-indicator__screen--complete'
          }

          return (
            <a
              key={screen.id}
              href={`#${screen.id}`}
              className={className}
              aria-current={
                isActive
                  ? 'page'
                  : undefined
              }
            >
              <span className="scroll-indicator__screen-number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <span className="scroll-indicator__screen-title">
                {screen.label}
              </span>

              <span
                className="scroll-indicator__screen-line"
                aria-hidden="true"
              />
            </a>
          )
        })}
      </nav>
    </aside>
  )
}

export default PortfolioScrollIndicator