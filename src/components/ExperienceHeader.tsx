type ExperienceHeaderProps = {
  activeType: string
  visible: boolean
}

function ExperienceHeader({
  activeType,
  visible,
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
        <a
          href="#experience"
          className={
            activeType === 'development'
              ? 'active'
              : undefined
          }
        >
          Development Experience
        </a>

        <a
          href="#work-experience"
          className={
            activeType === 'work'
              ? 'active'
              : undefined
          }
        >
          Work Experience
        </a>
      </nav>
    </div>
  )
}

export default ExperienceHeader