import PortfolioProjectFeature from './PortfolioProjectFeature'
import type { PortfolioProject } from '../types/portfolio'

const projects: PortfolioProject[] = [
  {
    id: 'dats-better-kanban',
    title: "Dat's: Better Kanban",
    type: 'solo',
    tech: [
      'React',
      'TypeScript',
      'Google Drive API',
      'Google OAuth',
      'Three.js',
    ],
    description:
      'A production project-management application built around customizable workflows, user-owned Google Drive storage, collaboration, and visual asset management.',
    highlights: [
      'Google OAuth and user-owned Drive storage',
      'Conflict-aware collaborative synchronization',
      'Image, video, and interactive 3D attachments',
      'Self-hosted HTTPS production deployment',
    ],
    media: [
      {
        type: 'video',
        src: '/project-media/dats-better-kanban/kanban-demo.mp4',
        alt: "Dat's Better Kanban demonstration video",
      },
      {
        type: 'image',
        src: '/project-media/dats-better-kanban/Image1.png',
        alt: "Dat's Better Kanban screenshot 1",
      },
      {
        type: 'image',
        src: '/project-media/dats-better-kanban/Image2.png',
        alt: "Dat's Better Kanban screenshot 2",
      },
      {
        type: 'image',
        src: '/project-media/dats-better-kanban/Image3.png',
        alt: "Dat's Better Kanban screenshot 3",
      },
      {
        type: 'image',
        src: '/project-media/dats-better-kanban/Image4.png',
        alt: "Dat's Better Kanban screenshot 4",
      },
      {
        type: 'image',
        src: '/project-media/dats-better-kanban/Image5.png',
        alt: "Dat's Better Kanban screenshot 5",
      },
    ],
  },
  {
    id: 'story-game',
    title: 'Story Game',
    type: 'team',
    tech: [
      'Unity',
      'C#',
    ],
    description:
      'An ongoing RPG project focused on reusable gameplay architecture and systems that can support different character types, equipment configurations, and combat behavior.',
    contribution:
      'Developing the gameplay and systems architecture, including character persistence, inventory and equipment, world interactions, gameplay-state coordination, combat skills, and resource systems.',
    members: [
      'Ruben Becerril',
      'Samantha Matthews',
    ],
    highlights: [
      'Character profiles and persistent character data',
      'Grid inventory, equipment, and world-item systems',
      'Centralized gameplay-state restrictions',
      'Combat skills and resource systems',
    ],
    media: [],
  },
  {
    id: 'dragoon-interactive',
    title: 'Dragoon Interactive',
    type: 'solo',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Lenis',
    ],
    description:
      'A studio and portfolio website designed to present software, game development work, team members, and future Dragoon Interactive projects.',
    highlights: [
      'Reusable React and TypeScript portfolio architecture',
      'Section-aware smooth scrolling and navigation',
      'Hierarchical project and experience presentation',
      'Responsive interface and self-hosted deployment',
    ],
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
          data-scroll-label={project.title}
          data-scroll-group="Development Experience"
          data-scroll-subtitle={project.tech.join(' / ')}
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