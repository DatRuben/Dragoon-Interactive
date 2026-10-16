import { useState } from 'react'
import PortfolioProjectFeature from './PortfolioProjectFeature'
import type { PortfolioProject } from '../types/portfolio'

const projects: PortfolioProject[] = [
  {
    id: 'dats-better-kanban',
    title: "Dat's: Better Kanban",
    tech: [
      'React',
      'TypeScript',
      'Google Drive API',
    ],
    description:
      'A customizable project-management application with shared project data, collaboration, rich attachments, and interactive 3D file previews.',
    role:
      'Designed and developed the application and its supporting systems.',
    media: [],
  },
  {
    id: 'story-game',
    title: 'Story Game',
    tech: [
      'Unity',
      'C#',
    ],
    description:
      'A Unity game project focused on scalable gameplay systems, inventory interactions, combat skills, and character mechanics.',
    role:
      'Gameplay programming and systems development.',
    media: [],
  },
  {
    id: 'dragoon-interactive',
    title: 'Dragoon Interactive',
    tech: [
      'React',
      'TypeScript',
      'Vite',
    ],
    description:
      'A studio and portfolio website for presenting software, game development, team members, and future Dragoon Interactive projects.',
    role:
      'Frontend development, site architecture, and deployment.',
    media: [],
  },
]

function DevelopmentExperience() {
  const [activeProjectId, setActiveProjectId] =
    useState(projects[0].id)

  const activeProject =
    projects.find(
      (project) =>
        project.id === activeProjectId,
    ) ?? projects[0]

  return (
    <div className="development-experience">
      <div className="development-project-nav">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            className={
              project.id === activeProjectId
                ? 'development-project-nav__button development-project-nav__button--active'
                : 'development-project-nav__button'
            }
            onClick={() =>
              setActiveProjectId(project.id)
            }
          >
            {project.title}
          </button>
        ))}
      </div>

      <PortfolioProjectFeature
        key={activeProject.id}
        project={activeProject}
      />
    </div>
  )
}

export default DevelopmentExperience