import type {
  ExperienceMode,
} from '../types/portfolio'

type ExperienceHeaderProps = {
  activeType: ExperienceMode
  visible: boolean
  onTypeChange: (
    type: ExperienceMode,
  ) => void
}

function ExperienceHeader({
  activeType,
  visible,
  onTypeChange,
}: ExperienceHeaderProps) {
  return (
    <div
      className={
        visible
          ? 'experience-mini-header experience-mini-header--visible'
          : 'experience-mini-header'
      }
    >
      <span className="experience-mini-header__label">
        EXPERIENCE
      </span>

      <nav
        className="experience-mini-nav"
        aria-label="Experience navigation"
      >
        <button
          type="button"
          className={
            activeType === 'development'
              ? 'active'
              : undefined
          }
          aria-pressed={
            activeType === 'development'
          }
          onClick={() =>
            onTypeChange('development')
          }
        >
          Development Experience
        </button>

        <button
          type="button"
          className={
            activeType === 'work'
              ? 'active'
              : undefined
          }
          aria-pressed={
            activeType === 'work'
          }
          onClick={() =>
            onTypeChange('work')
          }
        >
          Work Experience
        </button>
      </nav>
    </div>
  )
}

export default ExperienceHeader