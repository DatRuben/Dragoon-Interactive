export type PortfolioMedia = {
  type: 'image' | 'video'
  src: string
  alt: string
}

export type PortfolioPresentation =
  | 'media'
  | 'current-site'

export type ExperienceMode =
  | 'development'
  | 'work'

export type PortfolioProject = {
  id: string
  title: string
  type: 'solo' | 'team'
  tech: string[]
  description: string

  presentation?: PortfolioPresentation

  contribution?: string
  members?: string[]

  highlights: string[]
  media: PortfolioMedia[]
}