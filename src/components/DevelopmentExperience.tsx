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
      'Google OAuth',
      'Three.js',
    ],
    description:
      'A production project-management application built around customizable workflows, user-owned Google Drive storage, collaboration, and visual asset management.',
    role:
      'Designed and developed the application, including Google authentication and Drive integration, conflict-aware synchronization, shared project workflows, attachment handling, interactive 3D previews, and self-hosted deployment.',
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
      'An ongoing RPG project focused on reusable gameplay architecture and systems that can support different character types, equipment configurations, and combat behavior.',
    role:
      'Developed character profile and persistence systems, grid inventory and equipment handling, world-item interactions, centralized gameplay-state restrictions, combat skill resolution and execution, and combat/resource systems.',
    media: [],
  },
  {
    id: 'dragoon-interactive',
    title: 'Dragoon Interactive',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Lenis',
    ],
    description:
      'A studio and portfolio website designed to present software, game development work, team members, and future Dragoon Interactive projects.',
    role:
      'Developing the frontend architecture, reusable portfolio components, responsive interface, section-based navigation, smooth scrolling behavior, routing, and deployment.',
    media: [],
  },
  {
    id: 'tea-shop-manager',
    title: 'Tea Shop Manager',
    tech: [
      'Unity',
      'C#',
    ],
    description:
      'A Unity management game built around operating and progressing a tea shop through customer demand, inventory decisions, upgrades, and performance goals.',
    role:
      'Implemented inventory and recipe management, customer preferences, upgrades, day progression, money and goal systems, scoring and persistent high scores, UI state, and gameplay movement logic.',
    media: [],
  },
]

function DevelopmentExperience() {
  return (
    <>
      {projects.map((project, index) => (
        <section
          key={project.id}
          id={
            index === 0
              ? 'experience'
              : `experience-${project.id}`
          }
          className="experience-screen"
          data-scroll-screen
          data-nav-section="experience"
          data-experience-type="development"
        >
          <div className="experience-screen__content">
            <p className="experience-screen__index">
              {String(index + 1).padStart(2, '0')}
              {' / '}
              {String(projects.length).padStart(2, '0')}
            </p>

            <PortfolioProjectFeature
              project={project}
            />
          </div>
        </section>
      ))}
    </>
  )
}

export default DevelopmentExperience