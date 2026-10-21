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
        caption:
          "Full Dat's: Better Kanban application demo",
      },
      {
        type: 'image',
        src: '/project-media/dats-better-kanban/Image1.png',
        alt: "Dat's Better Kanban project connection screen",
        caption:
          'Project start screen with demo mode and Google Drive connection',
      },
      {
        type: 'image',
        src: '/project-media/dats-better-kanban/Image2.png',
        alt: "Dat's Better Kanban board view",
        caption:
          'Custom Kanban board with priorities, tasks, assignees, and attachments',
      },
      {
        type: 'image',
        src: '/project-media/dats-better-kanban/Image3.png',
        alt: "Dat's Better Kanban timeline view",
        caption:
          'Timeline view for visualizing project tasks across the workflow',
      },
      {
        type: 'image',
        src: '/project-media/dats-better-kanban/Image4.png',
        alt: "Dat's Better Kanban completed history view",
        caption:
          'Completed History view showing previously finished work',
      },
      {
        type: 'image',
        src: '/project-media/dats-better-kanban/Image5.png',
        alt: "Google Drive project folder used by Dat's Better Kanban",
        caption:
          'User-owned Google Drive project storage used by the application',
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
    media: [
      {
        type: 'image',
        src: '/project-media/story-game/StoryGameDevScene.png',
        alt: 'Story Game Unity development scene with character and creature models',
        caption:
          'Unity development scene with player and enemy',
      },
    ],
  },
  {
    id: 'dragoon-interactive',
    title: 'Dragoon Interactive',
    type: 'team',
    presentation: 'current-site',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Lenis',
    ],
    description:
      'You are viewing Dragoon Interactive now. This site serves as the studio website and portfolio hub for our software and game development work.',
    highlights: [
      'Reusable React and TypeScript architecture',
      'Section-aware smooth scrolling and navigation',
      'Responsive desktop and mobile layouts',
      'Self-hosted production deployment',
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