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

  return (
    <aside
      className="portfolio-scroll-indicator"
      aria-label="Portfolio position"
    >
      <div className="scroll-indicator__status">
        <span className="scroll-indicator__count">
          {String(activeIndex + 1).padStart(2, '0')}
          {' / '}
          {String(screens.length).padStart(2, '0')}
        </span>

        <span className="scroll-indicator__label">
          {activeScreen.label}
        </span>
      </div>

      <nav
        className="scroll-indicator__markers"
        aria-label="Portfolio screens"
      >
        {screens.map((screen, index) => {
          const isActive =
            index === activeIndex

          const isComplete =
            index < activeIndex

          let className =
            'scroll-indicator__marker'

          if (isActive) {
            className +=
              ' scroll-indicator__marker--active'
          } else if (isComplete) {
            className +=
              ' scroll-indicator__marker--complete'
          }

          return (
            <a
              key={screen.id}
              href={`#${screen.id}`}
              className={className}
              aria-label={`Go to ${screen.label}`}
              aria-current={
                isActive
                  ? 'page'
                  : undefined
              }
              title={screen.label}
            >
              <span />
            </a>
          )
        })}
      </nav>
    </aside>
  )
}

export default PortfolioScrollIndicator