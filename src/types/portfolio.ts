export type PortfolioMedia = {
  type: 'image' | 'video'
  src: string
  alt: string
}

export type PortfolioProject = {
  id: string
  title: string
  type: 'solo' | 'team'
  tech: string[]
  description: string

  contribution?: string
  members?: string[]

  highlights: string[]
  media: PortfolioMedia[]
}