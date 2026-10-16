import { useState } from 'react'

type ExperienceType = 'development' | 'work'

function ExperienceTabs() {
  const [activeType, setActiveType] =
    useState<ExperienceType>('development')

  return (
    <div className="experience-tabs">
      <div
        className="experience-tab-list"
        role="tablist"
        aria-label="Experience type"
      >
        <button
          type="button"
          className={
            activeType === 'development'
              ? 'experience-tab experience-tab--active'
              : 'experience-tab'
          }
          onClick={() => setActiveType('development')}
        >
          Development Experience
        </button>

        <button
          type="button"
          className={
            activeType === 'work'
              ? 'experience-tab experience-tab--active'
              : 'experience-tab'
          }
          onClick={() => setActiveType('work')}
        >
          Work Experience
        </button>
      </div>

      <div className="experience-panel">
        {activeType === 'development' ? (
          <>
            <h3>Development Experience</h3>

            <p>
              Development projects and experience will go here.
            </p>
          </>
        ) : (
          <>
            <h3>Work Experience</h3>

            <p>
              Employment history and professional work experience
              will go here.
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export default ExperienceTabs