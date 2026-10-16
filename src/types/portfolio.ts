export type PortfolioMedia = {
  type: 'image' | 'video'
  src: string
  alt: string
}

export type PortfolioProject = {
  id: string
  title: string
  tech: string[]
  description: string
  role: string
  media: PortfolioMedia[]
}